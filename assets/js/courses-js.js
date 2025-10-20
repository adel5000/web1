const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    category: 'programming',
    desc: 'Build modern websites using HTML, CSS, and JS.',
    date: '2025-01-10',
    location: 'Online',
    image: './assets/img/1-1.jpeg'
  },
  {
    id: 2,
    title: 'Python Programming',
    category: 'programming',
    desc: 'Start coding with Python for data and AI.',
    date: '2025-02-15',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
  },
  {
    id: 3,
    title: 'Graphic Design Essentials',
    category: 'design',
    desc: 'Learn color, layout, and typography basics.',
    date: '2025-03-05',
    location: 'Paris',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    category: 'design',
    desc: 'Design digital experiences using Figma.',
    date: '2025-04-22',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
  },
  {
    id: 5,
    title: 'Startup Fundamentals',
    category: 'business',
    desc: 'Turn ideas into successful businesses.',
    date: '2025-05-12',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'
  },
  {
    id: 6,
    title: 'Digital Marketing',
    category: 'business',
    desc: 'Learn SEO, ads, and online promotion.',
    date: '2025-06-18',
    location: 'Paris',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'
  },
  {
    id: 7,
    title: 'English for Beginners',
    category: 'languages',
    desc: 'Improve your communication skills easily.',
    date: '2025-07-03',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238'
  },
  {
    id: 8,
    title: 'French Basics',
    category: 'languages',
    desc: 'Speak and understand French confidently.',
    date: '2025-08-20',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238'
  },
  {
    id: 9,
    title: 'Mastering C++',
    category: 'programming',
    desc: 'Understand OOP and algorithms deeply.',
    date: '2025-09-10',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238'
  },
  {
    id: 10,
    title: 'Leadership Skills',
    category: 'business',
    desc: 'Develop your communication and influence.',
    date: '2025-10-01',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d'
  },
  {
    id: 11,
    title: 'Motion Graphics',
    category: 'design',
    desc: 'Animate designs using After Effects.',
    date: '2025-11-15',
    location: 'Paris',
    image: './assets/img/1-1.jpeg'
  },
  {
    id: 12,
    title: 'Spanish Language',
    category: 'languages',
    desc: 'Learn to converse fluently in Spanish.',
    date: '2025-12-08',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e'
  }
]

const container = document.getElementById('coursesContainer')

function renderCourses (list) {
  container.innerHTML = list
    .map(c => {
      // تحديد لون الشارة حسب التصنيف
      let badgeColor = ''
      switch (c.category.toLowerCase()) {
        case 'programming':
          badgeColor = 'bg-primary' // أزرق
          break
        case 'design':
          badgeColor = 'bg-pink' // وردي (سنضيفه يدويًا)
          break
        case 'business':
          badgeColor = 'bg-warning text-dark' // برتقالي
          break
        case 'languages':
          badgeColor = 'bg-success' // أخضر
          break
        default:
          badgeColor = 'bg-secondary' // رمادي افتراضي
      }

      return `
        <div class="course-card" data-category="${c.category}">
            <img src="${c.image}" alt="${c.title}">
            <div class="p-3">
                <h6>${c.title}</h6>
                <span class="badge ${badgeColor} mb-2">
                    ${c.category.charAt(0).toUpperCase() + c.category.slice(1)}
                </span>
                <p class="text-muted mb-1">
                    <i class="fa-regular fa-calendar me-1"></i>${c.date}
                </p>
                <p class="text-muted mb-1">
                    <i class="fa-solid fa-location-dot me-1"></i>${c.location}
                </p>
                <p class="text-muted small">${c.desc}</p>
                <a href="course.html?id=${
                  c.id
                }" class="btn btn-outline-primary btn-sm mt-2">Details</a>
            </div>
        </div>`
    })
    .join('')
}

function filterCourses () {
  const search = document.getElementById('searchInput').value.toLowerCase()
  const category = document.getElementById('categoryFilter').value
  const location = document.getElementById('locationFilter').value
  const date = document.getElementById('dateFilter').value

  const filtered = courses.filter(
    c =>
      (c.title.toLowerCase().includes(search) ||
        c.desc.toLowerCase().includes(search)) &&
      (category === '' || c.category === category) &&
      (location === '' || c.location === location) &&
      (date === '' || c.date >= date)
  )
  renderCourses(filtered)
}

document
  .querySelectorAll(
    '#searchInput, #categoryFilter, #locationFilter, #dateFilter'
  )
  .forEach(el => el.addEventListener('input', filterCourses))

renderCourses(courses)
