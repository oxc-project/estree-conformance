__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 16
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A0",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 24
            },
            "initializer": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 27,
              "end": 30
            },
            "computed": false,
            "start": 22,
            "end": 30
          }
        ],
        "start": 17,
        "end": 33
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 51
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "initializer": null,
            "computed": false,
            "start": 79,
            "end": 80
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "initializer": null,
            "computed": false,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 97,
              "end": 99
            },
            "computed": false,
            "start": 93,
            "end": 99
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "computed": false,
            "start": 105,
            "end": 114
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "operator": "|",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 128,
                "end": 129
              },
              "start": 124,
              "end": 129
            },
            "computed": false,
            "start": 120,
            "end": 129
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 139,
                "end": 140
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "start": 139,
              "end": 144
            },
            "computed": false,
            "start": 135,
            "end": 144
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 155,
                "end": 156
              },
              "operator": "&",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 159,
                "end": 160
              },
              "start": 155,
              "end": 160
            },
            "computed": false,
            "start": 150,
            "end": 161
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                "operator": "|",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "start": 173,
                "end": 178
              },
              "prefix": true,
              "start": 171,
              "end": 179
            },
            "computed": false,
            "start": 167,
            "end": 179
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "operator": ">>>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 195,
                "end": 196
              },
              "start": 189,
              "end": 196
            },
            "computed": false,
            "start": 185,
            "end": 196
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 206,
                "end": 207
              },
              "operator": "&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "start": 206,
              "end": 211
            },
            "computed": false,
            "start": 202,
            "end": 211
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 223,
                  "end": 224
                },
                "operator": "|",
                "right": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 227,
                  "end": 228
                },
                "start": 223,
                "end": 228
              },
              "prefix": true,
              "start": 221,
              "end": 229
            },
            "computed": false,
            "start": 217,
            "end": 229
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "prefix": true,
              "start": 239,
              "end": 241
            },
            "computed": false,
            "start": 235,
            "end": 241
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 252
              },
              "operator": "<<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "start": 251,
              "end": 257
            },
            "computed": false,
            "start": 247,
            "end": 257
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 272,
                "end": 273
              },
              "start": 267,
              "end": 273
            },
            "computed": false,
            "start": 263,
            "end": 273
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "operator": ">>",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 289
              },
              "start": 283,
              "end": 289
            },
            "computed": false,
            "start": 279,
            "end": 289
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 296
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 300
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 304,
                "end": 305
              },
              "start": 299,
              "end": 305
            },
            "computed": false,
            "start": 295,
            "end": 305
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PQ",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 313
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 317
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 321,
                "end": 322
              },
              "start": 316,
              "end": 322
            },
            "computed": false,
            "start": 311,
            "end": 322
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 334
              },
              "prefix": true,
              "start": 332,
              "end": 334
            },
            "computed": false,
            "start": 328,
            "end": 334
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              },
              "operator": "&",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 348,
                "end": 349
              },
              "start": 344,
              "end": 349
            },
            "computed": false,
            "start": 340,
            "end": 349
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 359,
                "end": 360
              },
              "operator": "&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "start": 359,
              "end": 364
            },
            "computed": false,
            "start": 355,
            "end": 364
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 371
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 375
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 379
              },
              "start": 374,
              "end": 379
            },
            "computed": false,
            "start": 370,
            "end": 379
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 390
              },
              "operator": "|",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 393,
                "end": 394
              },
              "start": 389,
              "end": 394
            },
            "computed": false,
            "start": 385,
            "end": 394
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 404,
                "end": 406
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 410
              },
              "start": 404,
              "end": 410
            },
            "computed": false,
            "start": 400,
            "end": 410
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 417
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 425
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "optional": false,
              "computed": false,
              "start": 420,
              "end": 427
            },
            "computed": false,
            "start": 416,
            "end": 427
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W1",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 519
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "A0",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 524
            },
            "computed": false,
            "start": 517,
            "end": 524
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W2",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 532
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A0",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 543
              },
              "optional": false,
              "computed": false,
              "start": 535,
              "end": 543
            },
            "computed": false,
            "start": 530,
            "end": 543
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W3",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 551
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 559
              },
              "property": {
                "type": "Literal",
                "value": "A0",
                "raw": "\"A0\"",
                "start": 560,
                "end": 564
              },
              "optional": false,
              "computed": true,
              "start": 554,
              "end": 565
            },
            "computed": false,
            "start": 549,
            "end": 565
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W4",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 573
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 581
              },
              "property": {
                "type": "Literal",
                "value": "W",
                "raw": "\"W\"",
                "start": 582,
                "end": 585
              },
              "optional": false,
              "computed": true,
              "start": 576,
              "end": 586
            },
            "computed": false,
            "start": 571,
            "end": 586
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "W5",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 594
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 602
              },
              "property": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "V",
                      "cooked": "V"
                    },
                    "tail": true,
                    "start": 603,
                    "end": 606
                  }
                ],
                "expressions": [],
                "start": 603,
                "end": 606
              },
              "optional": false,
              "computed": true,
              "start": 597,
              "end": 607
            },
            "computed": false,
            "start": 592,
            "end": 607
          }
        ],
        "start": 52,
        "end": 610
      },
      "const": true,
      "declare": false,
      "start": 35,
      "end": 610
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comments",
        "optional": false,
        "typeAnnotation": null,
        "start": 623,
        "end": 631
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "//",
              "raw": "\"//\"",
              "start": 638,
              "end": 642
            },
            "initializer": null,
            "computed": false,
            "start": 638,
            "end": 642
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "/*",
              "raw": "\"/*\"",
              "start": 648,
              "end": 652
            },
            "initializer": null,
            "computed": false,
            "start": 648,
            "end": 652
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "*/",
              "raw": "\"*/\"",
              "start": 658,
              "end": 662
            },
            "initializer": null,
            "computed": false,
            "start": 658,
            "end": 662
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "///",
              "raw": "\"///\"",
              "start": 668,
              "end": 673
            },
            "initializer": null,
            "computed": false,
            "start": 668,
            "end": 673
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "#",
              "raw": "\"#\"",
              "start": 679,
              "end": 682
            },
            "initializer": null,
            "computed": false,
            "start": 679,
            "end": 682
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "<!--",
              "raw": "\"<!--\"",
              "start": 688,
              "end": 694
            },
            "initializer": null,
            "computed": false,
            "start": 688,
            "end": 694
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "-->",
              "raw": "\"-->\"",
              "start": 700,
              "end": 705
            },
            "initializer": null,
            "computed": false,
            "start": 700,
            "end": 705
          }
        ],
        "start": 632,
        "end": 708
      },
      "const": true,
      "declare": false,
      "start": 612,
      "end": 708
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 720,
        "end": 721
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 746
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 774,
                        "end": 775
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 808,
                                "end": 809
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 828,
                                      "end": 830
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 833,
                                      "end": 834
                                    },
                                    "computed": false,
                                    "start": 828,
                                    "end": 834
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 852,
                                      "end": 854
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 857,
                                                "end": 858
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 859,
                                                "end": 860
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 857,
                                              "end": 860
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 861,
                                              "end": 862
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 857,
                                            "end": 862
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 863,
                                            "end": 864
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 857,
                                          "end": 864
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "V1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 865,
                                          "end": 867
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 857,
                                        "end": 867
                                      },
                                      "operator": "|",
                                      "right": {
                                        "type": "Literal",
                                        "value": 100,
                                        "raw": "100",
                                        "start": 870,
                                        "end": 873
                                      },
                                      "start": 857,
                                      "end": 873
                                    },
                                    "computed": false,
                                    "start": 852,
                                    "end": 873
                                  }
                                ],
                                "start": 810,
                                "end": 887
                              },
                              "const": true,
                              "declare": false,
                              "start": 797,
                              "end": 887
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 790,
                            "end": 887
                          }
                        ],
                        "start": 776,
                        "end": 897
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 764,
                      "end": 897
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 757,
                    "end": 897
                  }
                ],
                "start": 747,
                "end": 903
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 735,
              "end": 903
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 728,
            "end": 903
          }
        ],
        "start": 722,
        "end": 905
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 710,
      "end": 905
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 918
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 942,
                "end": 943
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 972
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1005,
                                "end": 1006
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1025,
                                      "end": 1027
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1030,
                                                "end": 1031
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1032,
                                                "end": 1033
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1030,
                                              "end": 1033
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1034,
                                              "end": 1035
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1030,
                                            "end": 1035
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1036,
                                            "end": 1037
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1030,
                                          "end": 1037
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": "V2",
                                          "raw": "\"V2\"",
                                          "start": 1038,
                                          "end": 1042
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 1030,
                                        "end": 1043
                                      },
                                      "operator": "&",
                                      "right": {
                                        "type": "Literal",
                                        "value": 200,
                                        "raw": "200",
                                        "start": 1046,
                                        "end": 1049
                                      },
                                      "start": 1030,
                                      "end": 1049
                                    },
                                    "computed": false,
                                    "start": 1025,
                                    "end": 1049
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V4",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1067,
                                      "end": 1069
                                    },
                                    "initializer": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1072,
                                                "end": 1073
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "B",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1074,
                                                "end": 1075
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1072,
                                              "end": 1075
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1076,
                                              "end": 1077
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1072,
                                            "end": 1077
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1078,
                                            "end": 1079
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1072,
                                          "end": 1079
                                        },
                                        "property": {
                                          "type": "TemplateLiteral",
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "V1",
                                                "cooked": "V1"
                                              },
                                              "tail": true,
                                              "start": 1080,
                                              "end": 1084
                                            }
                                          ],
                                          "expressions": [],
                                          "start": 1080,
                                          "end": 1084
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 1072,
                                        "end": 1085
                                      },
                                      "operator": "<<",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 1089,
                                        "end": 1090
                                      },
                                      "start": 1072,
                                      "end": 1090
                                    },
                                    "computed": false,
                                    "start": 1067,
                                    "end": 1090
                                  }
                                ],
                                "start": 1007,
                                "end": 1105
                              },
                              "const": true,
                              "declare": false,
                              "start": 994,
                              "end": 1105
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 987,
                            "end": 1105
                          }
                        ],
                        "start": 973,
                        "end": 1115
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 961,
                      "end": 1115
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 954,
                    "end": 1115
                  }
                ],
                "start": 944,
                "end": 1121
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 932,
              "end": 1121
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 925,
            "end": 1121
          }
        ],
        "start": 919,
        "end": 1123
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 907,
      "end": 1123
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1135,
        "end": 1137
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1161,
                "end": 1162
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1190,
                        "end": 1191
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1224,
                                "end": 1225
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1244,
                                      "end": 1246
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 1249,
                                      "end": 1251
                                    },
                                    "computed": false,
                                    "start": 1244,
                                    "end": 1251
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1269,
                                      "end": 1271
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 110,
                                      "raw": "110",
                                      "start": 1274,
                                      "end": 1277
                                    },
                                    "computed": false,
                                    "start": 1269,
                                    "end": 1277
                                  }
                                ],
                                "start": 1226,
                                "end": 1292
                              },
                              "const": true,
                              "declare": false,
                              "start": 1213,
                              "end": 1292
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1206,
                            "end": 1292
                          }
                        ],
                        "start": 1192,
                        "end": 1302
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1180,
                      "end": 1302
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1173,
                    "end": 1302
                  }
                ],
                "start": 1163,
                "end": 1308
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1151,
              "end": 1308
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1144,
            "end": 1308
          }
        ],
        "start": 1138,
        "end": 1310
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1125,
      "end": 1310
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1322,
        "end": 1324
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1349
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1377,
                        "end": 1378
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSEnumDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1411,
                                "end": 1412
                              },
                              "body": {
                                "type": "TSEnumBody",
                                "members": [
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1431,
                                      "end": 1433
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 1436,
                                      "end": 1438
                                    },
                                    "computed": false,
                                    "start": 1431,
                                    "end": 1438
                                  },
                                  {
                                    "type": "TSEnumMember",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1456,
                                      "end": 1458
                                    },
                                    "initializer": {
                                      "type": "Literal",
                                      "value": 110,
                                      "raw": "110",
                                      "start": 1461,
                                      "end": 1464
                                    },
                                    "computed": false,
                                    "start": 1456,
                                    "end": 1464
                                  }
                                ],
                                "start": 1413,
                                "end": 1479
                              },
                              "const": true,
                              "declare": false,
                              "start": 1400,
                              "end": 1479
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1393,
                            "end": 1479
                          }
                        ],
                        "start": 1379,
                        "end": 1489
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1367,
                      "end": 1489
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1360,
                    "end": 1489
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1563,
                        "end": 1564
                      },
                      "body": {
                        "type": "TSModuleBlock",
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1583,
                                  "end": 1584
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 1587,
                                  "end": 1588
                                },
                                "definite": false,
                                "start": 1583,
                                "end": 1588
                              }
                            ],
                            "declare": false,
                            "start": 1579,
                            "end": 1588
                          }
                        ],
                        "start": 1565,
                        "end": 1598
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 1553,
                      "end": 1598
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1546,
                    "end": 1598
                  }
                ],
                "start": 1350,
                "end": 1604
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1338,
              "end": 1604
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1331,
            "end": 1604
          }
        ],
        "start": 1325,
        "end": 1606
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1312,
      "end": 1606
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1615,
        "end": 1616
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1619,
              "end": 1620
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1622
            },
            "start": 1619,
            "end": 1622
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1623,
            "end": 1624
          },
          "start": 1619,
          "end": 1624
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1625,
          "end": 1626
        },
        "start": 1619,
        "end": 1626
      },
      "importKind": "value",
      "start": 1608,
      "end": 1627
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1637
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1640,
          "end": 1642
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1643,
          "end": 1644
        },
        "start": 1640,
        "end": 1644
      },
      "importKind": "value",
      "start": 1628,
      "end": 1645
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1653,
        "end": 1655
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1658,
          "end": 1660
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 1661,
          "end": 1662
        },
        "start": 1658,
        "end": 1662
      },
      "importKind": "value",
      "start": 1646,
      "end": 1663
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1674,
        "end": 1678
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1682,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1682,
              "end": 1683
            },
            "start": 1680,
            "end": 1683
          },
          "start": 1679,
          "end": 1683
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1686,
          "end": 1690
        },
        "start": 1684,
        "end": 1690
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1701,
                "end": 1702
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1707,
                  "end": 1708
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1709,
                  "end": 1711
                },
                "optional": false,
                "computed": false,
                "start": 1707,
                "end": 1711
              },
              "start": 1701,
              "end": 1711
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1713,
              "end": 1720
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1734,
                  "end": 1735
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1740,
                    "end": 1741
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1742,
                    "end": 1744
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1740,
                  "end": 1744
                },
                "start": 1734,
                "end": 1744
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1746,
                "end": 1753
              },
              "alternate": null,
              "start": 1730,
              "end": 1753
            },
            "start": 1697,
            "end": 1753
          }
        ],
        "start": 1691,
        "end": 1755
      },
      "expression": false,
      "start": 1665,
      "end": 1755
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1766,
        "end": 1770
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1774,
                    "end": 1776
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1777,
                    "end": 1778
                  },
                  "start": 1774,
                  "end": 1778
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1779,
                  "end": 1780
                },
                "start": 1774,
                "end": 1780
              },
              "typeArguments": null,
              "start": 1774,
              "end": 1780
            },
            "start": 1772,
            "end": 1780
          },
          "start": 1771,
          "end": 1780
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1783,
          "end": 1787
        },
        "start": 1781,
        "end": 1787
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1798,
                "end": 1799
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1804,
                      "end": 1806
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1807,
                      "end": 1808
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1804,
                    "end": 1808
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1810
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1804,
                  "end": 1810
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1811,
                  "end": 1813
                },
                "optional": false,
                "computed": false,
                "start": 1804,
                "end": 1813
              },
              "start": 1798,
              "end": 1813
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1815,
              "end": 1822
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1837
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1842,
                        "end": 1844
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1845,
                        "end": 1846
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1842,
                      "end": 1846
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1847,
                      "end": 1848
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1842,
                    "end": 1848
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1849,
                    "end": 1851
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1842,
                  "end": 1851
                },
                "start": 1836,
                "end": 1851
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1853,
                "end": 1860
              },
              "alternate": null,
              "start": 1832,
              "end": 1860
            },
            "start": 1794,
            "end": 1860
          }
        ],
        "start": 1788,
        "end": 1862
      },
      "expression": false,
      "start": 1757,
      "end": 1862
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1873,
        "end": 1877
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1883
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1884,
                    "end": 1885
                  },
                  "start": 1881,
                  "end": 1885
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1886,
                  "end": 1887
                },
                "start": 1881,
                "end": 1887
              },
              "typeArguments": null,
              "start": 1881,
              "end": 1887
            },
            "start": 1879,
            "end": 1887
          },
          "start": 1878,
          "end": 1887
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1890,
          "end": 1894
        },
        "start": 1888,
        "end": 1894
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1905,
                "end": 1906
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1911,
                      "end": 1913
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1914,
                      "end": 1915
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1911,
                    "end": 1915
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1916,
                    "end": 1917
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1911,
                  "end": 1917
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1920
                },
                "optional": false,
                "computed": false,
                "start": 1911,
                "end": 1920
              },
              "start": 1905,
              "end": 1920
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1922,
              "end": 1929
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1943,
                  "end": 1944
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1949,
                        "end": 1951
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1952,
                        "end": 1953
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1949,
                      "end": 1953
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1954,
                      "end": 1955
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1949,
                    "end": 1955
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1956,
                    "end": 1958
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1949,
                  "end": 1958
                },
                "start": 1943,
                "end": 1958
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 1960,
                "end": 1967
              },
              "alternate": null,
              "start": 1939,
              "end": 1967
            },
            "start": 1901,
            "end": 1967
          }
        ],
        "start": 1895,
        "end": 1969
      },
      "expression": false,
      "start": 1864,
      "end": 1969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1981,
        "end": 1984
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1988,
                "end": 1993
              },
              "typeArguments": null,
              "start": 1988,
              "end": 1993
            },
            "start": 1986,
            "end": 1993
          },
          "start": 1985,
          "end": 1993
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2009,
              "end": 2010
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2027,
                    "end": 2032
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2033,
                    "end": 2034
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2027,
                  "end": 2034
                },
                "consequent": [],
                "start": 2022,
                "end": 2035
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2049,
                    "end": 2054
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2055,
                    "end": 2056
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2049,
                  "end": 2056
                },
                "consequent": [],
                "start": 2044,
                "end": 2057
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2071,
                    "end": 2076
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2077,
                    "end": 2078
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2071,
                  "end": 2078
                },
                "consequent": [],
                "start": 2066,
                "end": 2079
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2093,
                    "end": 2098
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2099,
                    "end": 2100
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2093,
                  "end": 2100
                },
                "consequent": [],
                "start": 2088,
                "end": 2101
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2115,
                    "end": 2120
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2121,
                    "end": 2122
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2115,
                  "end": 2122
                },
                "consequent": [],
                "start": 2110,
                "end": 2123
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2137,
                    "end": 2142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2143,
                    "end": 2144
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2137,
                  "end": 2144
                },
                "consequent": [],
                "start": 2132,
                "end": 2145
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2159,
                    "end": 2164
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2165,
                    "end": 2166
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2159,
                  "end": 2166
                },
                "consequent": [],
                "start": 2154,
                "end": 2167
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2181,
                    "end": 2186
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2187,
                    "end": 2188
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2181,
                  "end": 2188
                },
                "consequent": [],
                "start": 2176,
                "end": 2189
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2203,
                    "end": 2208
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2209,
                    "end": 2210
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2203,
                  "end": 2210
                },
                "consequent": [],
                "start": 2198,
                "end": 2211
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2225,
                    "end": 2230
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "J",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2231,
                    "end": 2232
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2225,
                  "end": 2232
                },
                "consequent": [],
                "start": 2220,
                "end": 2233
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2247,
                    "end": 2252
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2253,
                    "end": 2254
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2247,
                  "end": 2254
                },
                "consequent": [],
                "start": 2242,
                "end": 2255
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2269,
                    "end": 2274
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2275,
                    "end": 2276
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2269,
                  "end": 2276
                },
                "consequent": [],
                "start": 2264,
                "end": 2277
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2291,
                    "end": 2296
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2297,
                    "end": 2298
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2291,
                  "end": 2298
                },
                "consequent": [],
                "start": 2286,
                "end": 2299
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2313,
                    "end": 2318
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2319,
                    "end": 2320
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2313,
                  "end": 2320
                },
                "consequent": [],
                "start": 2308,
                "end": 2321
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2335,
                    "end": 2340
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2341,
                    "end": 2342
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2335,
                  "end": 2342
                },
                "consequent": [],
                "start": 2330,
                "end": 2343
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2357,
                    "end": 2362
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2363,
                    "end": 2364
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2357,
                  "end": 2364
                },
                "consequent": [],
                "start": 2352,
                "end": 2365
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2379,
                    "end": 2384
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PQ",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2385,
                    "end": 2387
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2379,
                  "end": 2387
                },
                "consequent": [],
                "start": 2374,
                "end": 2388
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2402,
                    "end": 2407
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2408,
                    "end": 2409
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2402,
                  "end": 2409
                },
                "consequent": [],
                "start": 2397,
                "end": 2410
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2424,
                    "end": 2429
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2430,
                    "end": 2431
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2424,
                  "end": 2431
                },
                "consequent": [],
                "start": 2419,
                "end": 2432
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2446,
                    "end": 2451
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2452,
                    "end": 2453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2446,
                  "end": 2453
                },
                "consequent": [],
                "start": 2441,
                "end": 2454
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2468,
                    "end": 2473
                  },
                  "property": {
                    "type": "Literal",
                    "value": "T",
                    "raw": "\"T\"",
                    "start": 2474,
                    "end": 2477
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2468,
                  "end": 2478
                },
                "consequent": [],
                "start": 2463,
                "end": 2479
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2493,
                    "end": 2498
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "U",
                          "cooked": "U"
                        },
                        "tail": true,
                        "start": 2499,
                        "end": 2502
                      }
                    ],
                    "expressions": [],
                    "start": 2499,
                    "end": 2502
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2493,
                  "end": 2503
                },
                "consequent": [],
                "start": 2488,
                "end": 2504
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2518,
                    "end": 2523
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2524,
                    "end": 2525
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2518,
                  "end": 2525
                },
                "consequent": [],
                "start": 2513,
                "end": 2526
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2540,
                    "end": 2545
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2546,
                    "end": 2547
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2540,
                  "end": 2547
                },
                "consequent": [],
                "start": 2535,
                "end": 2548
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2562,
                    "end": 2567
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2570
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2562,
                  "end": 2570
                },
                "consequent": [],
                "start": 2557,
                "end": 2571
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2585,
                    "end": 2590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2591,
                    "end": 2593
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2585,
                  "end": 2593
                },
                "consequent": [],
                "start": 2580,
                "end": 2594
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2608,
                    "end": 2613
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2614,
                    "end": 2616
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2608,
                  "end": 2616
                },
                "consequent": [],
                "start": 2603,
                "end": 2617
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Enum1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2631,
                    "end": 2636
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2637,
                    "end": 2639
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2631,
                  "end": 2639
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2653,
                    "end": 2659
                  }
                ],
                "start": 2626,
                "end": 2659
              }
            ],
            "start": 2001,
            "end": 2665
          }
        ],
        "start": 1995,
        "end": 2667
      },
      "expression": false,
      "start": 1972,
      "end": 2667
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2678,
        "end": 2681
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2685,
                      "end": 2686
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2687,
                      "end": 2688
                    },
                    "start": 2685,
                    "end": 2688
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2689,
                    "end": 2690
                  },
                  "start": 2685,
                  "end": 2690
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2691,
                  "end": 2692
                },
                "start": 2685,
                "end": 2692
              },
              "typeArguments": null,
              "start": 2685,
              "end": 2692
            },
            "start": 2683,
            "end": 2692
          },
          "start": 2682,
          "end": 2692
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2695,
          "end": 2701
        },
        "start": 2693,
        "end": 2701
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2716,
              "end": 2717
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2734,
                          "end": 2735
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2736,
                          "end": 2737
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2734,
                        "end": 2737
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2738,
                        "end": 2739
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2734,
                      "end": 2739
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2740,
                      "end": 2741
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2734,
                    "end": 2741
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2742,
                    "end": 2744
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2734,
                  "end": 2744
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2753,
                      "end": 2754
                    },
                    "start": 2746,
                    "end": 2755
                  }
                ],
                "start": 2729,
                "end": 2755
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2769,
                          "end": 2770
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2771,
                          "end": 2772
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2769,
                        "end": 2772
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2773,
                        "end": 2774
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2769,
                      "end": 2774
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2775,
                      "end": 2776
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2769,
                    "end": 2776
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2777,
                    "end": 2779
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2769,
                  "end": 2779
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2788,
                      "end": 2789
                    },
                    "start": 2781,
                    "end": 2790
                  }
                ],
                "start": 2764,
                "end": 2790
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2804,
                          "end": 2805
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2806,
                          "end": 2807
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2804,
                        "end": 2807
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2808,
                        "end": 2809
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2804,
                      "end": 2809
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2810,
                      "end": 2811
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2804,
                    "end": 2811
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2812,
                    "end": 2814
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2804,
                  "end": 2814
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2823,
                      "end": 2824
                    },
                    "start": 2816,
                    "end": 2825
                  }
                ],
                "start": 2799,
                "end": 2825
              }
            ],
            "start": 2708,
            "end": 2831
          }
        ],
        "start": 2702,
        "end": 2833
      },
      "expression": false,
      "start": 2669,
      "end": 2833
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 2844,
        "end": 2847
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Comments",
                "optional": false,
                "typeAnnotation": null,
                "start": 2851,
                "end": 2859
              },
              "typeArguments": null,
              "start": 2851,
              "end": 2859
            },
            "start": 2849,
            "end": 2859
          },
          "start": 2848,
          "end": 2859
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 2875,
              "end": 2876
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2893,
                    "end": 2901
                  },
                  "property": {
                    "type": "Literal",
                    "value": "//",
                    "raw": "\"//\"",
                    "start": 2902,
                    "end": 2906
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2893,
                  "end": 2907
                },
                "consequent": [],
                "start": 2888,
                "end": 2908
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2922,
                    "end": 2930
                  },
                  "property": {
                    "type": "Literal",
                    "value": "/*",
                    "raw": "\"/*\"",
                    "start": 2931,
                    "end": 2935
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2922,
                  "end": 2936
                },
                "consequent": [],
                "start": 2917,
                "end": 2937
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2951,
                    "end": 2959
                  },
                  "property": {
                    "type": "Literal",
                    "value": "*/",
                    "raw": "\"*/\"",
                    "start": 2960,
                    "end": 2964
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2951,
                  "end": 2965
                },
                "consequent": [],
                "start": 2946,
                "end": 2966
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2980,
                    "end": 2988
                  },
                  "property": {
                    "type": "Literal",
                    "value": "///",
                    "raw": "\"///\"",
                    "start": 2989,
                    "end": 2994
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2980,
                  "end": 2995
                },
                "consequent": [],
                "start": 2975,
                "end": 2996
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3010,
                    "end": 3018
                  },
                  "property": {
                    "type": "Literal",
                    "value": "#",
                    "raw": "\"#\"",
                    "start": 3019,
                    "end": 3022
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3010,
                  "end": 3023
                },
                "consequent": [],
                "start": 3005,
                "end": 3024
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3038,
                    "end": 3046
                  },
                  "property": {
                    "type": "Literal",
                    "value": "<!--",
                    "raw": "\"<!--\"",
                    "start": 3047,
                    "end": 3053
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3038,
                  "end": 3054
                },
                "consequent": [],
                "start": 3033,
                "end": 3055
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Comments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3069,
                    "end": 3077
                  },
                  "property": {
                    "type": "Literal",
                    "value": "-->",
                    "raw": "\"-->\"",
                    "start": 3078,
                    "end": 3083
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3069,
                  "end": 3084
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3094,
                    "end": 3100
                  }
                ],
                "start": 3064,
                "end": 3100
              }
            ],
            "start": 2867,
            "end": 3106
          }
        ],
        "start": 2861,
        "end": 3108
      },
      "expression": false,
      "start": 2835,
      "end": 3108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3108
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 6,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 11,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "A0",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 35,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 41,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 126,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 157,
    "end": 158
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 191,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 253,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 269,
    "end": 271
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 285,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 301,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "PQ",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 318,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 346,
    "end": 347
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 391,
    "end": 392
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "W1",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "A0",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "W2",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 535,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "A0",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "W3",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 554,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560
  },
  {
    "type": "String",
    "value": "\"A0\"",
    "start": 560,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "W4",
    "start": 571,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 581,
    "end": 582
  },
  {
    "type": "String",
    "value": "\"W\"",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "W5",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 597,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 602,
    "end": 603
  },
  {
    "type": "Template",
    "value": "`V`",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 612,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 618,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 623,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "String",
    "value": "\"//\"",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 642,
    "end": 643
  },
  {
    "type": "String",
    "value": "\"/*\"",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653
  },
  {
    "type": "String",
    "value": "\"*/\"",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663
  },
  {
    "type": "String",
    "value": "\"///\"",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "String",
    "value": "\"#\"",
    "start": 679,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "String",
    "value": "\"<!--\"",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 694,
    "end": 695
  },
  {
    "type": "String",
    "value": "\"-->\"",
    "start": 700,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 710,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 728,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 735,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 757,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 764,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 790,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 797,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 803,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "V2",
    "start": 852,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 865,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 868,
    "end": 869
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 907,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 925,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 932,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 954,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 961,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 987,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 994,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "V3",
    "start": 1025,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "String",
    "value": "\"V2\"",
    "start": 1038,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "V4",
    "start": 1067,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Template",
    "value": "`V1`",
    "start": 1080,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1125,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1135,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1144,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1151,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1173,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1180,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1206,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1213,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1219,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 1244,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1249,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "V2",
    "start": 1269,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Numeric",
    "value": "110",
    "start": 1274,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1312,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1322,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1331,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1338,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1367,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1393,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1400,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1436,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "V2",
    "start": 1456,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Numeric",
    "value": "110",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1546,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1553,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1608,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1628,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1635,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1640,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1646,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1653,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1658,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1665,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "foo0",
    "start": 1674,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1686,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1697,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1703,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 1709,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1725,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1730,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1736,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "V2",
    "start": 1742,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1757,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1766,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1774,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1783,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1794,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1804,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 1811,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1827,
    "end": 1831
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1832,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1838,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1842,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "V2",
    "start": 1849,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1864,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1881,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1890,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1901,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1911,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 1918,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1934,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1939,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1949,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "V2",
    "start": 1956,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1972,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1981,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 1988,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2001,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2022,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2044,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2049,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2066,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2071,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2088,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2093,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2110,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2115,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2132,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2137,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2154,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2159,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2176,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2181,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2198,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2203,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2220,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2225,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2242,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2247,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2264,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2269,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2286,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2291,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2308,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2313,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2330,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2335,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2352,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2357,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2374,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2379,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "PQ",
    "start": 2385,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2397,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2402,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2419,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2424,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2441,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2446,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2463,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2468,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "String",
    "value": "\"T\"",
    "start": 2474,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2488,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2493,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Template",
    "value": "`U`",
    "start": 2499,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2513,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2518,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2535,
    "end": 2539
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2540,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2557,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2562,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "W1",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2580,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2585,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "W2",
    "start": 2591,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2603,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2608,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "W3",
    "start": 2614,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2626,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "Enum1",
    "start": 2631,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "W4",
    "start": 2637,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2653,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2669,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2678,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2695,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2708,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2729,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 2742,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2746,
    "end": 2752
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2764,
    "end": 2768
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "V2",
    "start": 2777,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2781,
    "end": 2787
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2799,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "V3",
    "start": 2812,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2816,
    "end": 2822
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2835,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2844,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 2851,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2867,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2888,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 2893,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "String",
    "value": "\"//\"",
    "start": 2902,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2917,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 2922,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "String",
    "value": "\"/*\"",
    "start": 2931,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2946,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 2951,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "String",
    "value": "\"*/\"",
    "start": 2960,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2975,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 2980,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "String",
    "value": "\"///\"",
    "start": 2989,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3005,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 3010,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "String",
    "value": "\"#\"",
    "start": 3019,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3033,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 3038,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "String",
    "value": "\"<!--\"",
    "start": 3047,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3064,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "Comments",
    "start": 3069,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "String",
    "value": "\"-->\"",
    "start": 3078,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3094,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3107,
    "end": 3108
  }
]
```
