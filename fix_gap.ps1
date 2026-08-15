$htmlFiles = Get-ChildItem -Path . -Filter *.html

$oldText = 'margin-top:1.5rem; align-items:center;'
$newText = 'margin-top:1.5rem; margin-bottom:1.5rem; align-items:center;'

$utf8NoBom = New-Object System.Text.UTF8Encoding $False

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, $utf8NoBom)
    
    $newContent = $content.Replace($oldText, $newText)
    
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)
        Write-Host "Updated $($file.Name)"
    } else {
        Write-Host "No match in $($file.Name)"
    }
}
