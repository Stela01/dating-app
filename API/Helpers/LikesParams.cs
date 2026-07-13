using System;

namespace API.Helpers;

public class LikesParams : PagingParams
{
    public int MemberId { get; set; }
    public string Predicate { get; set; } = "liked";
}