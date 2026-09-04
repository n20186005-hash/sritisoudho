# public/images の JPG を圧縮（最長辺 1920px・品質 78・メタデータ削除）
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$dir = (Resolve-Path 'public/images').Path
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]78)
$totalBefore = 0
$totalAfter = 0
Get-ChildItem -Path $dir -Filter '*.jpg' | ForEach-Object {
  $src = $_.FullName
  $img = [System.Drawing.Image]::FromFile($src)
  $w = $img.Width; $h = $img.Height
  $max = 1920
  $nw = $w; $nh = $h
  if ($w -gt $max -or $h -gt $max) {
    $r = [Math]::Min($max / $w, $max / $h)
    $nw = [int]($w * $r); $nh = [int]($h * $r)
  }
  $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $nw, $nh)
  $g.Dispose(); $img.Dispose()
  $tmp = Join-Path $dir ($_.BaseName + '.tmp.jpg')
  $bmp.Save($tmp, $enc, $params)
  $bmp.Dispose()
  $before = $_.Length
  $after = (Get-Item $tmp).Length
  $totalBefore += $before; $totalAfter += $after
  if ($after -lt $before) {
    Move-Item -Force -Path $tmp -Destination $src
    $note = 'replaced'
  } else {
    Remove-Item -Force -Path $tmp
    $note = 'kept original'
  }
  Write-Output ("{0} | {1}x{2} -> {3}x{4} | {5} KB -> {6} KB | {7}" -f $_.Name, $w, $h, $nw, $nh, [math]::Round($before/1KB,1), [math]::Round($after/1KB,1), $note)
}
Write-Output ("TOTAL | {0} KB -> {1} KB (-{2}%)" -f [math]::Round($totalBefore/1KB,1), [math]::Round($totalAfter/1KB,1), [math]::Round((1 - $totalAfter/$totalBefore) * 100, 1))
