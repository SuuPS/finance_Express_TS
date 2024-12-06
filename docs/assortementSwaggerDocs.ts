/**
 * @swagger
 * tags:
 *   name: Assortments
 *   description: Управление номенклатурами
 */

/**
 * @swagger
 * /assortments:
 *   get:
 *     summary: Получить все номенклатурамы
 *     tags: [Assortments]
 *     responses:
 *       200:
 *         description: Успешно получены все номенклатурамы
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   code:
 *                     type: string
 *       404:
 *         description: Номенклатуры не найдены
 */

/**
 * @swagger
 * /assortments:
 *   post:
 *     summary: Создать новую номенклатуру
 *     tags: [Assortments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: ""
 *               code:
 *                 type: string
 *                 example: ""
 *     responses:
 *       201:
 *         description: Успешно создана номенклатура
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 code:
 *                   type: string
 *       400:
 *         description: Неверные данные пользователя
 */