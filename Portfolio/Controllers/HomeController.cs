using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using Portfolio.Services;
using System.Diagnostics;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly MailService _mailService;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _mailService = new MailService(configuration);
        }

        [HttpGet]
        public IActionResult Index()
        {
            ViewData["Title"] = "Ambi";
            return View();
        }

        [HttpPost]
        public IActionResult Index(MessageModel meg)
        {

            _mailService.SendMail(meg);

            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Portfolio()
        {
            ViewData["Title"] = "Ambi";
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}