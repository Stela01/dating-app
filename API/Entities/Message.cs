using System;
using API.Entities;

namespace API.Entities;

public class Message
{
    public int Id { get; set; }
    public required string Content { get; set; }
    public DateTime? DateRead { get; set; }
    public DateTime MessageSent { get; set; } = DateTime.UtcNow;
    public bool SenderDeleted { get; set; }
    public bool RecipientDeleted { get; set; }

    // nav properties
    public required int SenderId { get; set; }
    public Member Sender { get; set; } = null!;
    public required int RecipientId { get; set; } 
    public Member Recipient { get; set; } = null! ;
}