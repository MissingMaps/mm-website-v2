(function () {
  var widget = document.getElementById("blog-search");
  if (!widget) return;

  var form = document.getElementById("blog-search-form");
  var input = document.getElementById("blog-search-input");
  var resultsEl = document.getElementById("blog-search-results");
  var pageResultsEl = document.getElementById("blog-search-page-results");
  var listingEl = document.getElementById("blog-listing");
  var indexUrl = widget.getAttribute("data-index-url");
  var noResultsText = input.getAttribute("data-no-results") || "No results found";
  var resultsForText = widget.getAttribute("data-results-for") || "Search results for";
  var clearText = widget.getAttribute("data-clear") || "Clear search";

  var index = null;
  var indexPromise = null;

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(indexUrl)
        .then(function (res) { return res.json(); })
        .then(function (data) { index = data; return data; })
        .catch(function () { index = []; return index; });
    }
    return indexPromise;
  }

  function openPanel() {
    widget.classList.add("open");
  }

  function closePanel() {
    widget.classList.remove("open");
  }

  function debounce(func, wait) {
    var timeout;
    return function () {
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () { func.apply(null, args); }, wait);
    };
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function matchResult(item) {
    return (
      '<a class="search-result" href="' + item.url + '">' +
      '<span class="search-result-title">' + escapeHtml(item.title) + "</span>" +
      (item.date ? '<span class="search-result-date">' + escapeHtml(item.date) + "</span>" : "") +
      (item.excerpt ? '<span class="search-result-excerpt">' + escapeHtml(item.excerpt) + "</span>" : "") +
      "</a>"
    );
  }

  function matches(query) {
    var q = query.trim().toLowerCase();
    if (q.length < 2 || !index) return [];
    return index.filter(function (item) {
      var haystack = (item.title + " " + item.excerpt).toLowerCase();
      return haystack.indexOf(q) !== -1;
    });
  }

  function renderDropdown(query) {
    var found = matches(query);
    if (query.trim().length < 2) {
      resultsEl.innerHTML = "";
      closePanel();
      return;
    }
    if (found.length === 0) {
      resultsEl.innerHTML = '<p class="search-no-results">' + escapeHtml(noResultsText) + "</p>";
    } else {
      resultsEl.innerHTML = found.slice(0, 8).map(matchResult).join("");
    }
    openPanel();
  }

  function renderFullResults(query) {
    if (!pageResultsEl || !listingEl) return;

    var found = matches(query);
    var heading =
      '<div class="search-page-header">' +
      "<h3>" + escapeHtml(resultsForText) + ' "' + escapeHtml(query) + '"</h3>' +
      '<a href="' + window.location.pathname + '" class="search-page-clear">' + escapeHtml(clearText) + "</a>" +
      "</div>";

    var body = found.length === 0
      ? '<p class="search-no-results">' + escapeHtml(noResultsText) + "</p>"
      : '<div class="search-page-list">' + found.map(matchResult).join("") + "</div>";

    listingEl.style.display = "none";
    pageResultsEl.innerHTML = heading + body;
  }

  var debouncedDropdown = debounce(function () { renderDropdown(input.value); }, 150);

  input.addEventListener("focus", function () { loadIndex(); });

  input.addEventListener("input", function () {
    loadIndex().then(function () { debouncedDropdown(); });
  });

  form.addEventListener("submit", function (e) {
    var q = input.value.trim();
    if (q.length < 2) {
      e.preventDefault();
    }
  });

  document.addEventListener("click", function (e) {
    if (widget.classList.contains("open") && !widget.contains(e.target)) {
      closePanel();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && widget.classList.contains("open")) {
      closePanel();
      input.blur();
    }
  });

  var queryParam = new URLSearchParams(window.location.search).get("q");
  if (queryParam && queryParam.trim().length >= 2) {
    input.value = queryParam;
    loadIndex().then(function () { renderFullResults(queryParam); });
  }
})();
