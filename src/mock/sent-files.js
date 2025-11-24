const sentFiles = [
    {
        id: "1",
        filename: "PRF_123.xml",
        status: "valid",
        text: "<ФИО><Фамилия>МОРОЗОВА <Имя>АНГЕЛИНА <Отчество>АЛЕКСАНДРОВНА <СНИЛС>156-923-517 90<ДатаРожде"
        + "ния>2004-07-14 2025-08-07 c6a6e57c-8bea-4ea4-be1b-a480677d1c00"
        + "2025-08-07T17:50:54.849+03:00 dEr0dxxgGfBsg1ZNsknxMaia5mdkXjtj/LXBTqWI j0A=mCmgROms/eQ3KPLGYjMJFK:"
        + "O53bwmBBm7WGy477ppTd0tcPinJvp/V7dOmN+gKI4p ZUpZKRPJBFGvDq/ +aeAquQ==MIIIvzCCCGygAwIBAgIRALQqQJ8yM"
        + "CaiqInA0Y9D7dkwCgYIKoUDBwEBAwIwggFh +aeAquQ==MIIIvzCCCGygAwIBAgIRALQqQJ8yMCaiqInA0Y9D7dkwCgYIKoU"
        + "DBwEBAwIwggFh MSAwHgYJKoZIhvcNAQkBFhF1Y19ma0Byb3NrYXpuYS5ydTEYMBYGA1UECAwPNzcg"
    },
    {
        id: "2",
        filename: "PRF_321.xml",
        status: "invalid",
        text: "<ФИО><Фамилия>МОРОЗОВА <Имя>АНГЕЛИНА <Отчество>АЛЕКСАНДРОВНА <СНИЛС>156-923-517 90 <ДатаРожде" 
        + "ния>2004-07-14 2025-08-07 c6a6e57c-8bea-4ea4-be1b-a480677d1c00 "
        + "2025-08-07T17:50:54.849+03:00 dEr0dxxgGfBsg1ZNsknxMaia5mdkXjtj/LXBTqWI j0A=mCmgROms/eQ3KPLGYjMJFK:"
        + "O53bwmBBm7WGy477ppTd0tcPinJvp/V7dOmN+gKI4p ZUpZKRPJBFGvDq/ +aeAquQ==MIIIvzCCCGygAwIBAgIRALQqQJ8yM"
        + "CaiqInA0Y9D7dkwCgYIKoUDBwEBAwIwggFh +aeAquQ==MIIIvzCCCGygAwIBAgIRALQqQJ8yMCaiqInA0Y9D7dkwCgYIKoU"
        + "DBwEBAwIwggFh MSAwHgYJKoZIhvcNAQkBFhF1Y19ma0Byb3NrYXpuYS5ydTEYMBYGA1UECAwPNzcg"
    },
    {
        id: "3",
        filename: "PRF_000.xml",
        status: "incorrect-file",
        text: "123qwety123"
    }
]

export {sentFiles};