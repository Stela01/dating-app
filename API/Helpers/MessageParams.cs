using System;

namespace API.Helpers;

public class MessageParams : PagingParams
{
    public int? MemberId { get; set; }
    public string Container { get; set; } = "Inbox";
}