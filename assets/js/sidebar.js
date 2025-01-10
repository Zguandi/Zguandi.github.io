document.addEventListener("DOMContentLoaded", function () {
    const outline = document.getElementById("outline");
    const headers = document.querySelectorAll("main h1, main h2, main h3");
  
    headers.forEach((header) => {
      const link = document.createElement("a");
      link.href = `#${header.id}`;
      link.textContent = header.textContent;
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