self.addEventListener("fetch", function(event) {
  event.respondWith(new Response('<div class="a-winner-is-me">Hello world</div>', {
    headers: {'content-type': 'text/html'}
  }));
});
