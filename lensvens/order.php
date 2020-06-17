<?php
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  // Getting POST data
  $c_name         = $_POST["contact_name"];
  $c_email        = $_POST["contact_email"];
  $c_phone        = $_POST["contact_phone"];
  $c_from         = $_POST["contact_from"];
  $g_recaptcha    = $_POST["g-recaptcha-response"];


  // reCaptcha keys
  $SITE_KEY = "6LfxX7kUAAAAAKRStT_5fxSshhNkr80RAOBTk8BU";
  $SECRET_KEY = "6LfxX7kUAAAAALbSU4Po7YctV_xIlEMBY9kcqNRM";

  // Checking if not a robot
  function getCaptcha($secretToken) {
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . "6LfxX7kUAAAAALbSU4Po7YctV_xIlEMBY9kcqNRM" . "&response=" . $secretToken);
    $return = json_decode($response);
    return ($return->success == true && $return->score > 0.5);
  }


  // Константы amoCRM
  const CRM_PIPELINE_ID         = 1180296;
  const CRM_STATUS_ID           = 20036724;
  const CRM_RESPONSIBLE_USER_ID = 2458321;


  // Roistat data
  $roistatData = array(
    'roistat' => null,
    'key'     => 'MTU1OTIwOjk2OTY1OmVlMWRlYzIyNzQ2YWYwZGIyMGM2YTg0NWQ0Nzc5NjQ3',
    'title'   => 'Заявка с "' . $c_from . '"',
    'name'    => $c_name,
    'phone'   => $c_phone,
    'email'   => $c_email,
    'comment' => null,
    'fields'  => array(
        'tags'                => 'LV, Site',
        'pipeline_id'         => CRM_PIPELINE_ID,         // Вопронка
        'status_id'           => CRM_STATUS_ID,           // Статус
        'responsible_user_id' => CRM_RESPONSIBLE_USER_ID, // Ответственный
        '454809'              => $c_from,                 // Форма захвата
        '447341'              => 'lensvens.ru',           // Адрес страницы
        '447611'              => null,                    // Город
        '453701'              => null,                    // Примечание
    ),
  );

  $success = 0;
  if (getCaptcha($g_recaptcha)) {
    $success = 1;

    file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));

    file_get_contents('http://www.google-analytics.com/collect?v=1&tid=UA-129677230-2&cid=&t=event&ec=lead&ea=contact&el=&ni=1');
  }
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png?v=QEJa0Y5mGr">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png?v=QEJa0Y5mGr">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png?v=QEJa0Y5mGr">
    <link rel="manifest" href="./favicon/site.webmanifest?v=QEJa0Y5mGr">
    <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg?v=QEJa0Y5mGr" color="#5bbad5">
    <link rel="shortcut icon" href="./favicon/favicon.ico?v=QEJa0Y5mGr">
    <meta name="apple-mobile-web-app-title" content="LensVens Instagram Shop">
    <meta name="application-name" content="LensVens Instagram Shop">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="msapplication-config" content="./favicon/browserconfig.xml?v=QEJa0Y5mGr">
    <meta name="theme-color" content="#ffffff">
    <!-- /Favicon -->

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(55486624, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/55486624" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129677230-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-129677230-2');
        </script>
    <!-- /Global site tag (gtag.js) - Google Analytics -->

    <link rel="stylesheet" href="./style.css?v=2" />
    <title>LensVens Instagram Shop</title>
</head>

<body>
    <section class="feedback">
        <?php if ($success == 1) { ?>
            <div class="feedback__content">
                <h1 class="feedback__title">Заявка отправлена</h1>

                <div class="feedback__text">
                    <p>Здравствуйте, <?php echo $c_name; ?>!<br> Ваша заявка успешно отправлена.</p>
                    <p>Благодарим Вас за интерес к франшизе. Наши менеджеры в скором времени отправят на Ваш почтовый адрес подробную презентацию и чуть позже свяжутся с Вами.</p>
                    <p>C уважением, команда LensVens.</p>
                <div>

                <div class="feedback__button">
                    <a class="button button--yellow" href="#" onclick="window.history.go(-1); return false;">Вернуться на главную</a>
                </div>

            </div>

            <script>
                function yaLoop() {
                    if (typeof yaCounter55486624 != 'undefined') {
                        yaCounter55486624.reachGoal('zayavka');
                    } else {
                        setTimeout(yaLoop, 1000);
                    }
                };
                yaLoop();
                function gaLoop() {
                    if (typeof gtag != 'undefined') {
                        gtag('event', 'Заявка', {'event_category': 'submit', 'event_action': 'zayavka'});
                    } else {
                        setTimeout(gaLoop, 1000);
                    }
                };
                gaLoop();
            </script>
            
        <?php } else {?>
            
            <div class="feedback__content">
                <h1 class="feedback__title">Ошибка отправки</h1>

                <div class="feedback__text">
                    <p>Здравствуйте, <?php echo $c_name; ?>!<br> Что-то пошло не так и ваша заявка не может быть отправлена.</p>
                    <p>Пожалуйста попробуйте позже или свяжитесь с нашими менеджерами по телефону <a class="feedback__phone" href="tel:88002224608">8&nbsp;(800)&nbsp;222&nbsp;46&nbsp;08</a>.</p>
                    <p>C уважением, команда LensVens.</p>
                <div>

                <div class="feedback__button">
                    <a class="button button--yellow" href="" onclick="window.history.go(-1); return false;">Вернуться на главную</a>
                </div>
            </div>
        <?php } ?>
    </section>
</body>
</html>
