$htmlFiles = Get-ChildItem -Filter *.html
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    $filename = $file.Name
    
    $isHome1 = ($filename -eq 'index.html')
    $isHome2 = ($filename -eq 'home2.html')
    $isAbout = ($filename -eq 'about.html')
    $isServices = ($filename -eq 'services.html')
    $isProducts = ($filename -eq 'products.html') -or ($filename -eq 'product-details.html')
    $isComparison = ($filename -eq 'comparison.html')
    $isBlog = ($filename -eq 'blog.html') -or ($filename -eq 'blog-single.html')
    $isContact = ($filename -eq 'contact.html')
    
    $homeActive = if ($isHome1 -or $isHome2) { " active" } else { "" }
    $home1Active = if ($isHome1) { " active" } else { "" }
    $home2Active = if ($isHome2) { " active" } else { "" }
    $aboutActive = if ($isAbout) { " active" } else { "" }
    $servicesActive = if ($isServices) { " active" } else { "" }
    $productsActive = if ($isProducts) { " active" } else { "" }
    $comparisonActive = if ($isComparison) { " active" } else { "" }
    $blogActive = if ($isBlog) { " active" } else { "" }
    $contactActive = if ($isContact) { " active" } else { "" }
    
    $newNav = @"
        <nav class="drawer-nav-links">
          <div class="drawer-dropdown-wrap" style="width: 100%;">
            <a href="javascript:void(0)" class="drawer-nav-link$homeActive"><span style="display:flex; align-items:center; gap:0.35rem;">Home <i data-lucide="chevron-down"></i></span></a>
            <div class="drawer-dropdown-menu" style="display:flex; flex-direction:column; background:var(--bg-surface-elevated); border-radius:8px; margin-bottom:0.75rem; margin-top:0.5rem; padding: 0.5rem 0;">
              <a href="index.html" class="drawer-nav-link$home1Active" style="border-bottom:none; padding:0.5rem 1rem; font-size:1rem;">Home 1</a>
              <a href="home2.html" class="drawer-nav-link$home2Active" style="border-bottom:none; padding:0.5rem 1rem; font-size:1rem;">Home 2</a>
            </div>
          </div>
          <a href="about.html" class="drawer-nav-link$aboutActive">About</a>
          <a href="services.html" class="drawer-nav-link$servicesActive">Services</a>
          <a href="products.html" class="drawer-nav-link$productsActive">Equipment</a>
          <a href="comparison.html" class="drawer-nav-link$comparisonActive">Compare</a>
          <a href="blog.html" class="drawer-nav-link$blogActive">Resources</a>
          <a href="contact.html" class="drawer-nav-link$contactActive">Contact</a>
        </nav>
"@

    $patternNav = '(?s)<nav class="drawer-nav-links">.*?</nav>'
    $content = $content -replace $patternNav, $newNav
    
    $newControls = @"
        <div class="drawer-controls">
          <div class="drawer-toggles" style="display:flex; justify-content:center; gap:1rem;">
            <button class="btn-icon theme-toggle-btn" title="Toggle Theme" aria-label="Toggle Theme">
              <i data-lucide="moon"></i>
            </button>
            <button class="btn-icon rtl-toggle-btn" title="Toggle LTR/RTL" aria-label="Toggle LTR/RTL">
              <i data-lucide="arrow-left-right"></i>
            </button>
            <a href="login.html" class="btn-icon" title="Login" aria-label="Login">
              <i data-lucide="user"></i>
            </a>
          </div>
          <a href="contact.html" class="btn btn-primary" style="width:100%;">
            <i data-lucide="file-text"></i> Request Quote
          </a>
        </div>
"@

    $patternControls = '(?s)<div class="drawer-controls">.*?</div>\s*</aside>'
    $content = $content -replace $patternControls, ($newControls + "`n    </aside>")
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
