using System;

namespace API.DTOs;

public class MessageDto
{
    public required int Id { get; set; }
    public required int SenderId { get; set; }
    public required string SenderUserName { get; set; }
    public string? SenderImageUrl { get; set; }
    public required int RecipientId { get; set; }
    public required string RecipientUserName { get; set; }
    public string? RecipientImageUrl { get; set; }
    public required string Content { get; set; }
    public DateTime? DateRead { get; set; }
    public DateTime MessageSent { get; set; }
}