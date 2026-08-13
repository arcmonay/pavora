$dest = "C:\Users\playf\Projects\pavora\public\media"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$files = @{
  "hero.jpg"      = "https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?fm=jpg&q=85&w=2400&auto=format&fit=crop"
  "grinding.jpg"  = "https://images.unsplash.com/photo-1517581178692-6d29e725b0d4?auto=format&fit=crop&w=1600&q=80"
  "injection.jpg" = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
  "leveling.jpg"  = "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1600&q=80"
  "asphalt.jpg"   = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80"
  "sealcoat.jpg"  = "https://images.unsplash.com/photo-1573348722427-f1a773268546?auto=format&fit=crop&w=1600&q=80"
  "marking.jpg"   = "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1600&q=80"
  "removal.jpg"   = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80"
  "blast.jpg"     = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
  "soda.jpg"      = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
  "laser.jpg"     = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80"
  "wash.jpg"      = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
  "lot.jpg"       = "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1600&q=80"
  "drone.jpg"     = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1600&q=80"
  "thermal.jpg"   = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
  "joints.jpg"    = "https://images.unsplash.com/photo-1486326657981-2e855814a8b0?auto=format&fit=crop&w=1600&q=80"
  "caulk.jpg"     = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80"
  "garage.jpg"    = "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1600&q=80"
  "parts.jpg"     = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80"
}

foreach ($name in $files.Keys) {
  $out = Join-Path $dest $name
  Write-Host "GET $name"
  curl.exe -fsSL --max-time 40 -A "Mozilla/5.0" $files[$name] -o $out
  if ((Test-Path $out) -and ((Get-Item $out).Length -gt 8000)) {
    Write-Host "  ok $((Get-Item $out).Length)"
  } else {
    Write-Host "  FAIL $name"
  }
}
