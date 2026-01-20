document.addEventListener("DOMContentLoaded", function () {
    const outline = document.getElementById("outline");
    // Only select headers inside article content, skip the page title
    const article = document.querySelector("main article");
    const allHeaders = article.querySelectorAll("h1, h2, h3");
    // Skip the first header (page title)
    const headers = Array.from(allHeaders).slice(1);

    // Truncate text if more than 6 words
    function truncateText(text, maxWords = 6) {
      const words = text.trim().split(/\s+/);
      if (words.length > maxWords) {
        return words.slice(0, 3).join(' ') + '...';
      }
      return text;
    }

    headers.forEach((header) => {
      const link = document.createElement("a");
      link.href = `#${header.id}`;
      link.textContent = truncateText(header.textContent);
      link.title = header.textContent; // Full text on hover
      link.className = `outline-${header.tagName.toLowerCase()}`;
      outline.appendChild(link);
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const link = document.querySelector(`a[href="#${id}"]`);
          if (entry.isIntersecting) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );
  
    headers.forEach((header) => observer.observe(header));
  });