export enum CommandType {
    MoveCard = "moveCard",

    CreateGate = "createGate",
    DestroyGate = "destroyGate",

    DamagePlayer = "damagePlayer",
    HealPlayer = "healPlayer",

    DrawCards = "drawCards",
    RevealCards = "revealCards",

    BeginAttack = "beginAttack",
    ResolveAttack = "resolveAttack",

    StartPriority = "startPriority",
    EndPriority = "endPriority",

    BeginPhase = "beginPhase",
    EndTurn = "endTurn",
}