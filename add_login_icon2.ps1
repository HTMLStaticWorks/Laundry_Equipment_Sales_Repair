$htmlFiles = Get-ChildItem -Path . -Filter *.html

$pattern = '(?s)(<button class="btn-icon rtl-toggle-btn"[^>]*>\s*<i data-lucide="arrow-left-right"></i>\s*</button>)'

$replacement = "`$1`n            <!-- Login Button -->`n            <a href=`"login.html`" class=`"btn-icon`" title=`"Login`" aria-label=`"Login`">`n              <i data-lucide=`"user`"></i>`n            </a>"

$utf8NoBom = New-Object System.Text.UTF8Encoding $False

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, $utf8NoBom)
    
    if ($content -match "<!-- Login Button -->") {
        Write-Host "Already has login: $($file.Name)"
        continue
    }

    $newContent = [regex]::Replace($content, $pattern, $replacement)
    
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)
        Write-Host "Updated $($file.Name)"
    } else {
        Write-Host "No match in $($file.Name)"
    }
}
