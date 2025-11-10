<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Estilos em linha para o botão */
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #373f75;
            color: #ffffff !important; /* !important garante que o texto fique branco */
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        /* Estilos gerais do corpo do e-mail para tipografia e padding */
        body, p, td, th {
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #555555; /* Cor de texto padrão */
        }
        h1 {
            color: #373f75;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 20px 0 30px 0;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #ffffff; border-radius: 6px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td style="padding: 40px 30px 40px 30px;">
                            <h1>Olá!</h1>
                            <p>Você está recebendo este e-mail porque recebemos uma solicitação de redefinição de senha para sua conta.</p>

                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding-top: 20px; padding-bottom: 20px;">
                                        <a href="{{ $resetUrl }}" class="button">
                                            Redefinir Senha
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p>Se você não solicitou uma redefinição de senha, nenhuma ação adicional é necessária.</p>
                            <p>Atenciosamente,<br>Meu ICronograma</p>
                        </td>
                    </tr>
                </table>
                </td>
        </tr>
    </table>
    </body>
</html>