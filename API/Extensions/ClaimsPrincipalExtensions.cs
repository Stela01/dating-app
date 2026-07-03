using System;
using System.Security.Claims;

namespace API.Extensions;

public static class ClaimsPrincipalExtensions
{
    public static int GetMemberId(this ClaimsPrincipal user)
    {
        var id = user.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new Exception("Cannot get memberId from token");

        return int.Parse(id);
    }
}