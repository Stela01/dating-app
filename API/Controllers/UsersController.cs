using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   [Authorize]
   public class UsersController(DataContext context) : BaseApiController
   {
   [AllowAnonymous] //dodala da bi se prikazali useri
   [HttpGet]
   public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
   {
       var users = await context.Users.ToListAsync();

       return users;
   }

   [AllowAnonymous]
   [HttpGet("{id:int}")] // /api/users/1
   public async Task<ActionResult<AppUser>> GetUser(int id)
   {
       var user = await context.Users.FindAsync(id);

       if(user == null) return NotFound();

       return user;
   }
   }
}
