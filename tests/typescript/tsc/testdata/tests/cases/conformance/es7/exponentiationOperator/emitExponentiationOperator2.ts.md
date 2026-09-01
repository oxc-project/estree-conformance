__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 11,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 22
          },
          "start": 16,
          "end": 22
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 26,
          "end": 27
        },
        "start": 16,
        "end": 27
      },
      "directive": null,
      "start": 16,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 35
          },
          "start": 29,
          "end": 35
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 39,
          "end": 40
        },
        "start": 29,
        "end": 40
      },
      "directive": null,
      "start": 29,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "start": 42,
          "end": 48
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 52,
          "end": 53
        },
        "start": 42,
        "end": 53
      },
      "directive": null,
      "start": 42,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 59
          },
          "start": 55,
          "end": 61
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 65,
          "end": 66
        },
        "start": 55,
        "end": 66
      },
      "directive": null,
      "start": 55,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 74
          },
          "start": 68,
          "end": 74
        },
        "operator": "+",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 81
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 85,
            "end": 86
          },
          "start": 77,
          "end": 86
        },
        "start": 68,
        "end": 86
      },
      "directive": null,
      "start": 68,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 94
          },
          "start": 88,
          "end": 94
        },
        "operator": "-",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 101
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 105,
            "end": 106
          },
          "start": 97,
          "end": 106
        },
        "start": 88,
        "end": 106
      },
      "directive": null,
      "start": 88,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 114
          },
          "start": 108,
          "end": 114
        },
        "operator": "*",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 121
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 125,
            "end": 126
          },
          "start": 117,
          "end": 126
        },
        "start": 108,
        "end": 126
      },
      "directive": null,
      "start": 108,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 134
          },
          "start": 128,
          "end": 134
        },
        "operator": "/",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 141
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 145,
            "end": 146
          },
          "start": 137,
          "end": 146
        },
        "start": 128,
        "end": 146
      },
      "directive": null,
      "start": 128,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 154
          },
          "start": 148,
          "end": 154
        },
        "operator": "%",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 161
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 165,
            "end": 166
          },
          "start": 157,
          "end": 166
        },
        "start": 148,
        "end": 166
      },
      "directive": null,
      "start": 148,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 172
          },
          "start": 168,
          "end": 174
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 178,
          "end": 179
        },
        "start": 168,
        "end": 179
      },
      "directive": null,
      "start": 168,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 185
          },
          "start": 181,
          "end": 187
        },
        "operator": "**",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 191,
          "end": 192
        },
        "start": 181,
        "end": 192
      },
      "directive": null,
      "start": 181,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 198
          },
          "start": 194,
          "end": 200
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 209
          },
          "prefix": true,
          "start": 204,
          "end": 209
        },
        "start": 194,
        "end": 209
      },
      "directive": null,
      "start": 194,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 215
          },
          "start": 211,
          "end": 217
        },
        "operator": "**",
        "right": {
          "type": "UnaryExpression",
          "operator": "+",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          },
          "prefix": true,
          "start": 221,
          "end": 226
        },
        "start": 211,
        "end": 226
      },
      "directive": null,
      "start": 211,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 233
          },
          "start": 229,
          "end": 235
        },
        "operator": "+",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 246,
            "end": 247
          },
          "start": 238,
          "end": 247
        },
        "start": 229,
        "end": 247
      },
      "directive": null,
      "start": 229,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 253
          },
          "start": 249,
          "end": 255
        },
        "operator": "-",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 262
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 266,
            "end": 267
          },
          "start": 258,
          "end": 267
        },
        "start": 249,
        "end": 267
      },
      "directive": null,
      "start": 249,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 273
          },
          "start": 269,
          "end": 275
        },
        "operator": "*",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 282
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 286,
            "end": 287
          },
          "start": 278,
          "end": 287
        },
        "start": 269,
        "end": 287
      },
      "directive": null,
      "start": 269,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 293
          },
          "start": 289,
          "end": 295
        },
        "operator": "/",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 302
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 306,
            "end": 307
          },
          "start": 298,
          "end": 307
        },
        "start": 289,
        "end": 307
      },
      "directive": null,
      "start": 289,
      "end": 308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 313
          },
          "start": 309,
          "end": 315
        },
        "operator": "%",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 322
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 326,
            "end": 327
          },
          "start": 318,
          "end": 327
        },
        "start": 309,
        "end": 327
      },
      "directive": null,
      "start": 309,
      "end": 328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 336
          },
          "start": 330,
          "end": 336
        },
        "operator": "+",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 339,
            "end": 340
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 344,
            "end": 345
          },
          "start": 339,
          "end": 345
        },
        "start": 330,
        "end": 345
      },
      "directive": null,
      "start": 330,
      "end": 346
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 353
          },
          "start": 347,
          "end": 353
        },
        "operator": "-",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 356,
            "end": 357
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 361,
            "end": 362
          },
          "start": 356,
          "end": 362
        },
        "start": 347,
        "end": 362
      },
      "directive": null,
      "start": 347,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 370
          },
          "start": 364,
          "end": 370
        },
        "operator": "*",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 373,
            "end": 374
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 378,
            "end": 379
          },
          "start": 373,
          "end": 379
        },
        "start": 364,
        "end": 379
      },
      "directive": null,
      "start": 364,
      "end": 380
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 387
          },
          "start": 381,
          "end": 387
        },
        "operator": "/",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 390,
            "end": 391
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 395,
            "end": 396
          },
          "start": 390,
          "end": 396
        },
        "start": 381,
        "end": 396
      },
      "directive": null,
      "start": 381,
      "end": 397
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 404
          },
          "start": 398,
          "end": 404
        },
        "operator": "%",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 407,
            "end": 408
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 412,
            "end": 413
          },
          "start": 407,
          "end": 413
        },
        "start": 398,
        "end": 413
      },
      "directive": null,
      "start": 398,
      "end": 414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 422
          },
          "start": 416,
          "end": 422
        },
        "operator": "+",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 425,
            "end": 426
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 430,
            "end": 431
          },
          "start": 425,
          "end": 431
        },
        "start": 416,
        "end": 431
      },
      "directive": null,
      "start": 416,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 439
          },
          "start": 433,
          "end": 439
        },
        "operator": "-",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 442,
            "end": 443
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 447,
            "end": 448
          },
          "start": 442,
          "end": 448
        },
        "start": 433,
        "end": 448
      },
      "directive": null,
      "start": 433,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 456
          },
          "start": 450,
          "end": 456
        },
        "operator": "*",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 459,
            "end": 460
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 464,
            "end": 465
          },
          "start": 459,
          "end": 465
        },
        "start": 450,
        "end": 465
      },
      "directive": null,
      "start": 450,
      "end": 466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 473
          },
          "start": 467,
          "end": 473
        },
        "operator": "/",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 476,
            "end": 477
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 481,
            "end": 482
          },
          "start": 476,
          "end": 482
        },
        "start": 467,
        "end": 482
      },
      "directive": null,
      "start": 467,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 485,
          "end": 486
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 496
          },
          "start": 490,
          "end": 496
        },
        "start": 485,
        "end": 496
      },
      "directive": null,
      "start": 485,
      "end": 497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 498,
          "end": 499
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 509
          },
          "start": 503,
          "end": 509
        },
        "start": 498,
        "end": 509
      },
      "directive": null,
      "start": 498,
      "end": 510
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 511,
          "end": 512
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 520
          },
          "start": 516,
          "end": 522
        },
        "start": 511,
        "end": 522
      },
      "directive": null,
      "start": 511,
      "end": 523
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 524,
          "end": 525
        },
        "operator": "**",
        "right": {
          "type": "UpdateExpression",
          "operator": "--",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 533
          },
          "start": 529,
          "end": 535
        },
        "start": 524,
        "end": 535
      },
      "directive": null,
      "start": 524,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 538,
          "end": 539
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 549
            },
            "start": 543,
            "end": 549
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 553,
            "end": 554
          },
          "start": 543,
          "end": 554
        },
        "start": 538,
        "end": 554
      },
      "directive": null,
      "start": 538,
      "end": 555
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 556,
          "end": 557
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 567
            },
            "start": 561,
            "end": 567
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 571,
            "end": 572
          },
          "start": 561,
          "end": 572
        },
        "start": 556,
        "end": 572
      },
      "directive": null,
      "start": 556,
      "end": 573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 574,
          "end": 575
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 583
            },
            "start": 579,
            "end": 585
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 589,
            "end": 590
          },
          "start": 579,
          "end": 590
        },
        "start": 574,
        "end": 590
      },
      "directive": null,
      "start": 574,
      "end": 591
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 592,
          "end": 593
        },
        "operator": "**",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 601
            },
            "start": 597,
            "end": 603
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 607,
            "end": 608
          },
          "start": 597,
          "end": 608
        },
        "start": 592,
        "end": 608
      },
      "directive": null,
      "start": 592,
      "end": 609
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 611,
            "end": 612
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 622
            },
            "start": 616,
            "end": 622
          },
          "start": 611,
          "end": 622
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 625,
          "end": 626
        },
        "start": 611,
        "end": 626
      },
      "directive": null,
      "start": 611,
      "end": 627
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 628,
            "end": 629
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 639
            },
            "start": 633,
            "end": 639
          },
          "start": 628,
          "end": 639
        },
        "operator": "-",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 642,
          "end": 643
        },
        "start": 628,
        "end": 643
      },
      "directive": null,
      "start": 628,
      "end": 644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 645,
            "end": 646
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 652,
              "end": 656
            },
            "start": 650,
            "end": 656
          },
          "start": 645,
          "end": 656
        },
        "operator": "*",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 659,
          "end": 660
        },
        "start": 645,
        "end": 660
      },
      "directive": null,
      "start": 645,
      "end": 661
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 662,
            "end": 663
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 673
            },
            "start": 667,
            "end": 673
          },
          "start": 662,
          "end": 673
        },
        "operator": "/",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 676,
          "end": 677
        },
        "start": 662,
        "end": 677
      },
      "directive": null,
      "start": 662,
      "end": 678
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 679,
            "end": 680
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 690
            },
            "start": 684,
            "end": 690
          },
          "start": 679,
          "end": 690
        },
        "operator": "%",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 693,
          "end": 694
        },
        "start": 679,
        "end": 694
      },
      "directive": null,
      "start": 679,
      "end": 695
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 697,
            "end": 698
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 708
            },
            "start": 702,
            "end": 708
          },
          "start": 697,
          "end": 708
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 711,
          "end": 712
        },
        "start": 697,
        "end": 712
      },
      "directive": null,
      "start": 697,
      "end": 713
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 714,
            "end": 715
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 725
            },
            "start": 719,
            "end": 725
          },
          "start": 714,
          "end": 725
        },
        "operator": "-",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 728,
          "end": 729
        },
        "start": 714,
        "end": 729
      },
      "directive": null,
      "start": 714,
      "end": 730
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 731,
            "end": 732
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 742
            },
            "start": 736,
            "end": 742
          },
          "start": 731,
          "end": 742
        },
        "operator": "*",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 745,
          "end": 746
        },
        "start": 731,
        "end": 746
      },
      "directive": null,
      "start": 731,
      "end": 747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 748,
            "end": 749
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 759
            },
            "start": 753,
            "end": 759
          },
          "start": 748,
          "end": 759
        },
        "operator": "/",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 762,
          "end": 763
        },
        "start": 748,
        "end": 763
      },
      "directive": null,
      "start": 748,
      "end": 764
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 765,
            "end": 766
          },
          "operator": "**",
          "right": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 776
            },
            "start": 770,
            "end": 776
          },
          "start": 765,
          "end": 776
        },
        "operator": "%",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 779,
          "end": 780
        },
        "start": 765,
        "end": 780
      },
      "directive": null,
      "start": 765,
      "end": 781
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 781
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 11,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 16,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 23,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 29,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 36,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 49,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 62,
    "end": 64
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 68,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 82,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 102,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 122,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 142,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 148,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 162,
    "end": 164
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 175,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 188,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 243,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 263,
    "end": 265
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 283,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 303,
    "end": 305
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 323,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 330,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 337,
    "end": 338
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 341,
    "end": 343
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 347,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 354,
    "end": 355
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 358,
    "end": 360
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 364,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 371,
    "end": 372
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 375,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 381,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 388,
    "end": 389
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 392,
    "end": 394
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 398,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 405,
    "end": 406
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 409,
    "end": 411
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 416,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 427,
    "end": 429
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 433,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 435,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 440,
    "end": 441
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 444,
    "end": 446
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 450,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 457,
    "end": 458
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 461,
    "end": 463
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 467,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 478,
    "end": 480
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 487,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 490,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 503,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 513,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 526,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 543,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 550,
    "end": 552
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 561,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 568,
    "end": 570
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 576,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 586,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 594,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 604,
    "end": 606
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 616,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 623,
    "end": 624
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 633,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 640,
    "end": 641
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 650,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 652,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 657,
    "end": 658
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 667,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 669,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 674,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 684,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 691,
    "end": 692
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 699,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 702,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 709,
    "end": 710
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 719,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 726,
    "end": 727
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 736,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 743,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 753,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 760,
    "end": 761
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 772,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 777,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  }
]
```
