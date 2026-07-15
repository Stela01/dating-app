using System;

namespace API.DTOs;

public class CreateMessageDto
{
    public required int RecipientId { get; set; }
    public required string Content { get; set; }
}