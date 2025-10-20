document.addEventListener('DOMContentLoaded', () => {
  // ====== JS Filter with Fade Effect ======
  const filterButtons = document.querySelectorAll('[data-filter]')
  const courses = document.querySelectorAll('.course-card')

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.getAttribute('data-filter')

      courses.forEach(course => {
        // Fade out first
        course.classList.add('fade-out')
        setTimeout(() => {
          const match = filter === 'all' || course.dataset.category === filter
          course.style.display = match ? 'block' : 'none'
          // Fade in if shown
          if (match) course.classList.remove('fade-out')
        }, 800)
      })
    })
  })
})
