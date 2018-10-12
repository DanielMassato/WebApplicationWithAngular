using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationWithAngular.Models;


namespace WebApplicationWithAngular.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]

        public JsonResult Teste()
        {
            Dados teste = new Models.Dados();
            teste.NomeCompleto = "Daniel Massato Shiroma";
            teste.Nome = "Daniel";
            teste.Sobrenome = "Shiroma";
            teste.Email = "daniel_massato_shiroma@hotmail.com";
            teste.Telefone = "29193956";
            teste.Servico = "Teste";


            return Json(teste, JsonRequestBehavior.AllowGet);

        }
    }
}