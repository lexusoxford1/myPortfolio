let projectsData = []

// Fetch projects JSON
fetch('/api/projects/')
    .then(res => res.json())
    .then(data => {
        projectsData = data
        // Optional: console.log(projectsData)
    })

// Open modal when "View" button clicked
function openProjectDetail(index) {
    const project = projectsData[index]
    if (!project) return

    document.getElementById('projectDetailTitle').textContent = project.title
    document.getElementById('projectDetailDesc').textContent = project.subtitle
    document.getElementById('projectDetailOverview').textContent = project.overview
    document.getElementById('projectDetailJourney').textContent = project.journey

    // Features
    const featuresEl = document.getElementById('projectDetailFeatures')
    featuresEl.innerHTML = ''
    project.features.split(',').forEach(f => {
        const li = document.createElement('li')
        li.textContent = f.trim()
        featuresEl.appendChild(li)
    })

    // Languages
    const langsEl = document.getElementById('projectDetailLanguages')
    langsEl.innerHTML = ''
    project.languages.split(',').forEach(lang => {
        const span = document.createElement('span')
        span.textContent = lang.trim()
        span.className = 'px-3 py-1 bg-gray-200 rounded-full text-sm'
        langsEl.appendChild(span)
    })

    // Tools
    const toolsEl = document.getElementById('projectDetailTools')
    toolsEl.innerHTML = ''
    project.tools.split(',').forEach(tool => {
        const span = document.createElement('span')
        span.textContent = tool.trim()
        span.className = 'px-3 py-1 bg-gray-200 rounded-full text-sm'
        toolsEl.appendChild(span)
    })

    // Images (if multiple)
    const imagesEl = document.getElementById('projectDetailImages')
    imagesEl.innerHTML = ''
    const img = document.createElement('img')
    img.src = project.image
    img.className = 'w-full h-40 object-cover rounded-xl shadow-md'
    imagesEl.appendChild(img)

    document.getElementById('projectDetailOverlay').classList.remove('hidden')
}

// Close modal
function closeProjectDetail() {
    document.getElementById('projectDetailOverlay').classList.add('hidden')
}