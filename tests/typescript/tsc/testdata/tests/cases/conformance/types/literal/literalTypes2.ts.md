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
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
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
              "start": 13,
              "end": 14
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 14
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "initializer": null,
            "computed": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 7,
        "end": 22
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              },
              "start": 32,
              "end": 41
            },
            "start": 28,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 28,
          "end": 41
        }
      ],
      "declare": false,
      "start": 24,
      "end": 42
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 58
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 61,
            "end": 62
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 62
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "right": {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 69,
            "end": 74
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 74
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 81,
            "end": 85
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 85
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 89
          },
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "optional": false,
            "computed": false,
            "start": 92,
            "end": 95
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 109
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 112,
                  "end": 113
                },
                "definite": false,
                "start": 107,
                "end": 113
              }
            ],
            "declare": false,
            "start": 103,
            "end": 114
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 125
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 129,
                    "end": 132
                  },
                  "prefix": true,
                  "start": 128,
                  "end": 132
                },
                "definite": false,
                "start": 123,
                "end": 132
              }
            ],
            "declare": false,
            "start": 119,
            "end": 133
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 144
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 147,
                    "end": 148
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 151,
                    "end": 152
                  },
                  "start": 147,
                  "end": 152
                },
                "definite": false,
                "start": 142,
                "end": 152
              }
            ],
            "declare": false,
            "start": 138,
            "end": 153
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 164
                },
                "init": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 167,
                  "end": 172
                },
                "definite": false,
                "start": 162,
                "end": 172
              }
            ],
            "declare": false,
            "start": 158,
            "end": 173
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 184
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 187,
                  "end": 189
                },
                "definite": false,
                "start": 182,
                "end": 189
              }
            ],
            "declare": false,
            "start": 178,
            "end": 190
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 201
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 204,
                    "end": 209
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "def",
                    "raw": "\"def\"",
                    "start": 212,
                    "end": 217
                  },
                  "start": 204,
                  "end": 217
                },
                "definite": false,
                "start": 199,
                "end": 217
              }
            ],
            "declare": false,
            "start": 195,
            "end": 218
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 229
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 232,
                  "end": 236
                },
                "definite": false,
                "start": 227,
                "end": 236
              }
            ],
            "declare": false,
            "start": 223,
            "end": 237
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 248
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 252
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "optional": false,
                  "computed": false,
                  "start": 251,
                  "end": 254
                },
                "definite": false,
                "start": 246,
                "end": 254
              }
            ],
            "declare": false,
            "start": 242,
            "end": 255
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 264,
                  "end": 266
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 269,
                  "end": 270
                },
                "definite": false,
                "start": 264,
                "end": 270
              }
            ],
            "declare": false,
            "start": 260,
            "end": 271
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 282
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 286,
                    "end": 289
                  },
                  "prefix": true,
                  "start": 285,
                  "end": 289
                },
                "definite": false,
                "start": 280,
                "end": 289
              }
            ],
            "declare": false,
            "start": 276,
            "end": 290
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 301
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 304,
                    "end": 305
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 308,
                    "end": 309
                  },
                  "start": 304,
                  "end": 309
                },
                "definite": false,
                "start": 299,
                "end": 309
              }
            ],
            "declare": false,
            "start": 295,
            "end": 310
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 321
                },
                "init": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 324,
                  "end": 329
                },
                "definite": false,
                "start": 319,
                "end": 329
              }
            ],
            "declare": false,
            "start": 315,
            "end": 330
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 341
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 344,
                  "end": 346
                },
                "definite": false,
                "start": 339,
                "end": 346
              }
            ],
            "declare": false,
            "start": 335,
            "end": 347
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 358
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 361,
                    "end": 366
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "def",
                    "raw": "\"def\"",
                    "start": 369,
                    "end": 374
                  },
                  "start": 361,
                  "end": 374
                },
                "definite": false,
                "start": 356,
                "end": 374
              }
            ],
            "declare": false,
            "start": 352,
            "end": 375
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 386
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 389,
                  "end": 393
                },
                "definite": false,
                "start": 384,
                "end": 393
              }
            ],
            "declare": false,
            "start": 380,
            "end": 394
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 405
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 408,
                    "end": 409
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 411
                  },
                  "optional": false,
                  "computed": false,
                  "start": 408,
                  "end": 411
                },
                "definite": false,
                "start": 403,
                "end": 411
              }
            ],
            "declare": false,
            "start": 399,
            "end": 412
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 425
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 428,
                  "end": 429
                },
                "definite": false,
                "start": 423,
                "end": 429
              }
            ],
            "declare": false,
            "start": 417,
            "end": 430
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 443
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 447,
                    "end": 450
                  },
                  "prefix": true,
                  "start": 446,
                  "end": 450
                },
                "definite": false,
                "start": 441,
                "end": 450
              }
            ],
            "declare": false,
            "start": 435,
            "end": 451
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 464
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 467,
                    "end": 468
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 471,
                    "end": 472
                  },
                  "start": 467,
                  "end": 472
                },
                "definite": false,
                "start": 462,
                "end": 472
              }
            ],
            "declare": false,
            "start": 456,
            "end": 473
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 486
                },
                "init": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 489,
                  "end": 494
                },
                "definite": false,
                "start": 484,
                "end": 494
              }
            ],
            "declare": false,
            "start": 478,
            "end": 495
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 508
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 511,
                  "end": 513
                },
                "definite": false,
                "start": 506,
                "end": 513
              }
            ],
            "declare": false,
            "start": 500,
            "end": 514
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 527
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 530,
                    "end": 535
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "def",
                    "raw": "\"def\"",
                    "start": 538,
                    "end": 543
                  },
                  "start": 530,
                  "end": 543
                },
                "definite": false,
                "start": 525,
                "end": 543
              }
            ],
            "declare": false,
            "start": 519,
            "end": 544
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 557
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 560,
                  "end": 564
                },
                "definite": false,
                "start": 555,
                "end": 564
              }
            ],
            "declare": false,
            "start": 549,
            "end": 565
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 576,
                  "end": 578
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 582
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 583,
                    "end": 584
                  },
                  "optional": false,
                  "computed": false,
                  "start": 581,
                  "end": 584
                },
                "definite": false,
                "start": 576,
                "end": 584
              }
            ],
            "declare": false,
            "start": 570,
            "end": 585
          }
        ],
        "start": 97,
        "end": 587
      },
      "expression": false,
      "start": 44,
      "end": 587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 598,
        "end": 600
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 605,
                  "end": 606
                },
                "start": 605,
                "end": 606
              },
              "start": 603,
              "end": 606
            },
            "start": 601,
            "end": 606
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 609,
            "end": 610
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 601,
          "end": 610
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 616,
                  "end": 621
                },
                "start": 616,
                "end": 621
              },
              "start": 614,
              "end": 621
            },
            "start": 612,
            "end": 621
          },
          "right": {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 624,
            "end": 629
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 629
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 635,
                  "end": 639
                },
                "start": 635,
                "end": 639
              },
              "start": 633,
              "end": 639
            },
            "start": 631,
            "end": 639
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 642,
            "end": 646
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 646
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 652,
                    "end": 653
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 655
                  },
                  "start": 652,
                  "end": 655
                },
                "typeArguments": null,
                "start": 652,
                "end": 655
              },
              "start": 650,
              "end": 655
            },
            "start": 648,
            "end": 655
          },
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 659
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "optional": false,
            "computed": false,
            "start": 658,
            "end": 661
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 648,
          "end": 661
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 677,
                        "end": 678
                      },
                      "start": 677,
                      "end": 678
                    },
                    "start": 675,
                    "end": 678
                  },
                  "start": 673,
                  "end": 678
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 681,
                  "end": 682
                },
                "definite": false,
                "start": 673,
                "end": 682
              }
            ],
            "declare": false,
            "start": 669,
            "end": 683
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 697,
                          "end": 700
                        },
                        "prefix": true,
                        "start": 696,
                        "end": 700
                      },
                      "start": 696,
                      "end": 700
                    },
                    "start": 694,
                    "end": 700
                  },
                  "start": 692,
                  "end": 700
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 704,
                    "end": 707
                  },
                  "prefix": true,
                  "start": 703,
                  "end": 707
                },
                "definite": false,
                "start": 692,
                "end": 707
              }
            ],
            "declare": false,
            "start": 688,
            "end": 708
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "abc",
                        "raw": "\"abc\"",
                        "start": 721,
                        "end": 726
                      },
                      "start": 721,
                      "end": 726
                    },
                    "start": 719,
                    "end": 726
                  },
                  "start": 717,
                  "end": 726
                },
                "init": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 729,
                  "end": 734
                },
                "definite": false,
                "start": 717,
                "end": 734
              }
            ],
            "declare": false,
            "start": 713,
            "end": 735
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 748,
                        "end": 752
                      },
                      "start": 748,
                      "end": 752
                    },
                    "start": 746,
                    "end": 752
                  },
                  "start": 744,
                  "end": 752
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 755,
                  "end": 759
                },
                "definite": false,
                "start": 744,
                "end": 759
              }
            ],
            "declare": false,
            "start": 740,
            "end": 760
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 773,
                          "end": 774
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 775,
                          "end": 776
                        },
                        "start": 773,
                        "end": 776
                      },
                      "typeArguments": null,
                      "start": 773,
                      "end": 776
                    },
                    "start": 771,
                    "end": 776
                  },
                  "start": 769,
                  "end": 776
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 779,
                    "end": 780
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 781,
                    "end": 782
                  },
                  "optional": false,
                  "computed": false,
                  "start": 779,
                  "end": 782
                },
                "definite": false,
                "start": 769,
                "end": 782
              }
            ],
            "declare": false,
            "start": 765,
            "end": 783
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 796,
                        "end": 797
                      },
                      "start": 796,
                      "end": 797
                    },
                    "start": 794,
                    "end": 797
                  },
                  "start": 792,
                  "end": 797
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 800,
                  "end": 801
                },
                "definite": false,
                "start": 792,
                "end": 801
              }
            ],
            "declare": false,
            "start": 788,
            "end": 802
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 816,
                          "end": 819
                        },
                        "prefix": true,
                        "start": 815,
                        "end": 819
                      },
                      "start": 815,
                      "end": 819
                    },
                    "start": 813,
                    "end": 819
                  },
                  "start": 811,
                  "end": 819
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 823,
                    "end": 826
                  },
                  "prefix": true,
                  "start": 822,
                  "end": 826
                },
                "definite": false,
                "start": 811,
                "end": 826
              }
            ],
            "declare": false,
            "start": 807,
            "end": 827
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "abc",
                        "raw": "\"abc\"",
                        "start": 840,
                        "end": 845
                      },
                      "start": 840,
                      "end": 845
                    },
                    "start": 838,
                    "end": 845
                  },
                  "start": 836,
                  "end": 845
                },
                "init": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 848,
                  "end": 853
                },
                "definite": false,
                "start": 836,
                "end": 853
              }
            ],
            "declare": false,
            "start": 832,
            "end": 854
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 867,
                        "end": 871
                      },
                      "start": 867,
                      "end": 871
                    },
                    "start": 865,
                    "end": 871
                  },
                  "start": 863,
                  "end": 871
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 874,
                  "end": 878
                },
                "definite": false,
                "start": 863,
                "end": 878
              }
            ],
            "declare": false,
            "start": 859,
            "end": 879
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 892,
                          "end": 893
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 894,
                          "end": 895
                        },
                        "start": 892,
                        "end": 895
                      },
                      "typeArguments": null,
                      "start": 892,
                      "end": 895
                    },
                    "start": 890,
                    "end": 895
                  },
                  "start": 888,
                  "end": 895
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 899
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 900,
                    "end": 901
                  },
                  "optional": false,
                  "computed": false,
                  "start": 898,
                  "end": 901
                },
                "definite": false,
                "start": 888,
                "end": 901
              }
            ],
            "declare": false,
            "start": 884,
            "end": 902
          }
        ],
        "start": 663,
        "end": 904
      },
      "expression": false,
      "start": 589,
      "end": 904
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 915,
        "end": 917
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 932,
                  "end": 934
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 937,
                    "end": 941
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 944,
                    "end": 945
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 948,
                    "end": 949
                  },
                  "start": 937,
                  "end": 949
                },
                "definite": false,
                "start": 932,
                "end": 949
              }
            ],
            "declare": false,
            "start": 926,
            "end": 950
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 961,
                  "end": 963
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 970
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 973,
                    "end": 974
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "two",
                    "raw": "\"two\"",
                    "start": 977,
                    "end": 982
                  },
                  "start": 966,
                  "end": 982
                },
                "definite": false,
                "start": 961,
                "end": 982
              }
            ],
            "declare": false,
            "start": 955,
            "end": 983
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 994,
                  "end": 996
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 999,
                    "end": 1003
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1006,
                      "end": 1007
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1009
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1006,
                    "end": 1009
                  },
                  "alternate": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1012,
                      "end": 1016
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1019,
                      "end": 1023
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 1026,
                      "end": 1029
                    },
                    "start": 1012,
                    "end": 1029
                  },
                  "start": 999,
                  "end": 1029
                },
                "definite": false,
                "start": 994,
                "end": 1029
              }
            ],
            "declare": false,
            "start": 988,
            "end": 1030
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1043
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1046,
                    "end": 1050
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 1053,
                    "end": 1058
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1061,
                    "end": 1065
                  },
                  "start": 1046,
                  "end": 1065
                },
                "definite": false,
                "start": 1041,
                "end": 1065
              }
            ],
            "declare": false,
            "start": 1035,
            "end": 1066
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1077,
                  "end": 1079
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1082,
                    "end": 1086
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 456,
                    "raw": "456",
                    "start": 1089,
                    "end": 1092
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1095,
                    "end": 1104
                  },
                  "start": 1082,
                  "end": 1104
                },
                "definite": false,
                "start": 1077,
                "end": 1104
              }
            ],
            "declare": false,
            "start": 1071,
            "end": 1105
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1122,
                            "end": 1126
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 123,
                                "raw": "123",
                                "start": 1128,
                                "end": 1131
                              },
                              "start": 1128,
                              "end": 1131
                            },
                            "start": 1126,
                            "end": 1131
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1122,
                          "end": 1131
                        }
                      ],
                      "start": 1120,
                      "end": 1133
                    },
                    "start": 1118,
                    "end": 1133
                  },
                  "start": 1116,
                  "end": 1133
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1138,
                        "end": 1142
                      },
                      "value": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 1144,
                        "end": 1147
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1138,
                      "end": 1147
                    }
                  ],
                  "start": 1136,
                  "end": 1149
                },
                "definite": false,
                "start": 1116,
                "end": 1149
              }
            ],
            "declare": false,
            "start": 1110,
            "end": 1150
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1166,
                                "end": 1167
                              },
                              "start": 1166,
                              "end": 1167
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 1170,
                                "end": 1171
                              },
                              "start": 1170,
                              "end": 1171
                            }
                          ],
                          "start": 1166,
                          "end": 1171
                        },
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 1173,
                                "end": 1178
                              },
                              "start": 1173,
                              "end": 1178
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 1181,
                                "end": 1186
                              },
                              "start": 1181,
                              "end": 1186
                            }
                          ],
                          "start": 1173,
                          "end": 1186
                        }
                      ],
                      "start": 1165,
                      "end": 1187
                    },
                    "start": 1163,
                    "end": 1187
                  },
                  "start": 1161,
                  "end": 1187
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1191,
                      "end": 1192
                    },
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 1194,
                      "end": 1199
                    }
                  ],
                  "start": 1190,
                  "end": 1200
                },
                "definite": false,
                "start": 1161,
                "end": 1200
              }
            ],
            "declare": false,
            "start": 1155,
            "end": 1201
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1214
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1217,
                    "end": 1221
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1224,
                    "end": 1226
                  },
                  "alternate": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1229,
                      "end": 1233
                    },
                    "consequent": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1236,
                      "end": 1238
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1241,
                      "end": 1248
                    },
                    "start": 1229,
                    "end": 1248
                  },
                  "start": 1217,
                  "end": 1248
                },
                "definite": false,
                "start": 1212,
                "end": 1248
              }
            ],
            "declare": false,
            "start": 1206,
            "end": 1249
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1258,
                  "end": 1260
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1263,
                  "end": 1265
                },
                "definite": false,
                "start": 1258,
                "end": 1265
              }
            ],
            "declare": false,
            "start": 1254,
            "end": 1266
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1275,
                  "end": 1277
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1280,
                  "end": 1282
                },
                "definite": false,
                "start": 1275,
                "end": 1282
              }
            ],
            "declare": false,
            "start": 1271,
            "end": 1283
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1292,
                  "end": 1294
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1297,
                  "end": 1299
                },
                "definite": false,
                "start": 1292,
                "end": 1299
              }
            ],
            "declare": false,
            "start": 1288,
            "end": 1300
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1309,
                  "end": 1311
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1314,
                  "end": 1316
                },
                "definite": false,
                "start": 1309,
                "end": 1316
              }
            ],
            "declare": false,
            "start": 1305,
            "end": 1317
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1326,
                  "end": 1328
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1331,
                  "end": 1333
                },
                "definite": false,
                "start": 1326,
                "end": 1333
              }
            ],
            "declare": false,
            "start": 1322,
            "end": 1334
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1345
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1348,
                  "end": 1350
                },
                "definite": false,
                "start": 1343,
                "end": 1350
              }
            ],
            "declare": false,
            "start": 1339,
            "end": 1351
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1362
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1365,
                  "end": 1367
                },
                "definite": false,
                "start": 1360,
                "end": 1367
              }
            ],
            "declare": false,
            "start": 1356,
            "end": 1368
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1377,
                  "end": 1379
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1382,
                  "end": 1384
                },
                "definite": false,
                "start": 1377,
                "end": 1384
              }
            ],
            "declare": false,
            "start": 1373,
            "end": 1385
          }
        ],
        "start": 920,
        "end": 1387
      },
      "expression": false,
      "start": 906,
      "end": 1387
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1395,
        "end": 1397
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1406
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1409,
              "end": 1410
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1404,
            "end": 1411
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1416,
              "end": 1418
            },
            "typeAnnotation": null,
            "value": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1422,
                "end": 1425
              },
              "prefix": true,
              "start": 1421,
              "end": 1425
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1416,
            "end": 1426
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1431,
              "end": 1433
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1436,
                "end": 1437
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1440,
                "end": 1441
              },
              "start": 1436,
              "end": 1441
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1431,
            "end": 1442
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1447,
              "end": 1449
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 1452,
              "end": 1457
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1447,
            "end": 1458
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1463,
              "end": 1465
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 1468,
              "end": 1470
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1463,
            "end": 1471
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1476,
              "end": 1478
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 1481,
                "end": 1486
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "def",
                "raw": "\"def\"",
                "start": 1489,
                "end": 1494
              },
              "start": 1481,
              "end": 1494
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1476,
            "end": 1495
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1502
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1505,
              "end": 1509
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1500,
            "end": 1510
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1515,
              "end": 1517
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1520,
                "end": 1521
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1522,
                "end": 1523
              },
              "optional": false,
              "computed": false,
              "start": 1520,
              "end": 1523
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1515,
            "end": 1524
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1540
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1543,
              "end": 1544
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1529,
            "end": 1545
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1559,
              "end": 1561
            },
            "typeAnnotation": null,
            "value": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1565,
                "end": 1568
              },
              "prefix": true,
              "start": 1564,
              "end": 1568
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1550,
            "end": 1569
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1583,
              "end": 1585
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1588,
                "end": 1589
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1592,
                "end": 1593
              },
              "start": 1588,
              "end": 1593
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1574,
            "end": 1594
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1608,
              "end": 1610
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 1613,
              "end": 1618
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1599,
            "end": 1619
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1633,
              "end": 1635
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 1638,
              "end": 1640
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1624,
            "end": 1641
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1655,
              "end": 1657
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 1660,
                "end": 1665
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "def",
                "raw": "\"def\"",
                "start": 1668,
                "end": 1673
              },
              "start": 1660,
              "end": 1673
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1646,
            "end": 1674
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1688,
              "end": 1690
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1693,
              "end": 1697
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1679,
            "end": 1698
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1712,
              "end": 1714
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1717,
                "end": 1718
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1719,
                "end": 1720
              },
              "optional": false,
              "computed": false,
              "start": 1717,
              "end": 1720
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 1703,
            "end": 1721
          }
        ],
        "start": 1398,
        "end": 1723
      },
      "abstract": false,
      "declare": false,
      "start": 1389,
      "end": 1723
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1734,
        "end": 1736
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1751,
                  "end": 1753
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1758,
                        "end": 1759
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1761,
                        "end": 1762
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1758,
                      "end": 1762
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1764,
                        "end": 1765
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 1767,
                        "end": 1772
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1764,
                      "end": 1772
                    }
                  ],
                  "start": 1756,
                  "end": 1774
                },
                "definite": false,
                "start": 1751,
                "end": 1774
              }
            ],
            "declare": false,
            "start": 1745,
            "end": 1775
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1792,
                            "end": 1793
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1796,
                                    "end": 1797
                                  },
                                  "start": 1796,
                                  "end": 1797
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1800,
                                    "end": 1801
                                  },
                                  "start": 1800,
                                  "end": 1801
                                }
                              ],
                              "start": 1796,
                              "end": 1801
                            },
                            "start": 1794,
                            "end": 1801
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1792,
                          "end": 1802
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1803,
                            "end": 1804
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "foo",
                                    "raw": "\"foo\"",
                                    "start": 1806,
                                    "end": 1811
                                  },
                                  "start": 1806,
                                  "end": 1811
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "bar",
                                    "raw": "\"bar\"",
                                    "start": 1814,
                                    "end": 1819
                                  },
                                  "start": 1814,
                                  "end": 1819
                                }
                              ],
                              "start": 1806,
                              "end": 1819
                            },
                            "start": 1804,
                            "end": 1819
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1803,
                          "end": 1819
                        }
                      ],
                      "start": 1790,
                      "end": 1821
                    },
                    "start": 1788,
                    "end": 1821
                  },
                  "start": 1786,
                  "end": 1821
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1826,
                        "end": 1827
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1829,
                        "end": 1830
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1826,
                      "end": 1830
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1832,
                        "end": 1833
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 1835,
                        "end": 1840
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1832,
                      "end": 1840
                    }
                  ],
                  "start": 1824,
                  "end": 1842
                },
                "definite": false,
                "start": 1786,
                "end": 1842
              }
            ],
            "declare": false,
            "start": 1780,
            "end": 1843
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1852,
                  "end": 1854
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1859,
                        "end": 1860
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1862,
                        "end": 1863
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1859,
                      "end": 1863
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1865,
                        "end": 1866
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 1868,
                        "end": 1873
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1865,
                      "end": 1873
                    }
                  ],
                  "start": 1857,
                  "end": 1875
                },
                "definite": false,
                "start": 1852,
                "end": 1875
              }
            ],
            "declare": false,
            "start": 1848,
            "end": 1876
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1891,
                            "end": 1892
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 1895,
                                    "end": 1896
                                  },
                                  "start": 1895,
                                  "end": 1896
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1899,
                                    "end": 1900
                                  },
                                  "start": 1899,
                                  "end": 1900
                                }
                              ],
                              "start": 1895,
                              "end": 1900
                            },
                            "start": 1893,
                            "end": 1900
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1891,
                          "end": 1901
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1902,
                            "end": 1903
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "foo",
                                    "raw": "\"foo\"",
                                    "start": 1905,
                                    "end": 1910
                                  },
                                  "start": 1905,
                                  "end": 1910
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "bar",
                                    "raw": "\"bar\"",
                                    "start": 1913,
                                    "end": 1918
                                  },
                                  "start": 1913,
                                  "end": 1918
                                }
                              ],
                              "start": 1905,
                              "end": 1918
                            },
                            "start": 1903,
                            "end": 1918
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1902,
                          "end": 1918
                        }
                      ],
                      "start": 1889,
                      "end": 1920
                    },
                    "start": 1887,
                    "end": 1920
                  },
                  "start": 1885,
                  "end": 1920
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1925,
                        "end": 1926
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1928,
                        "end": 1929
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1925,
                      "end": 1929
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1931,
                        "end": 1932
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 1934,
                        "end": 1939
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1931,
                      "end": 1939
                    }
                  ],
                  "start": 1923,
                  "end": 1941
                },
                "definite": false,
                "start": 1885,
                "end": 1941
              }
            ],
            "declare": false,
            "start": 1881,
            "end": 1942
          }
        ],
        "start": 1739,
        "end": 1944
      },
      "expression": false,
      "start": 1725,
      "end": 1944
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1955,
        "end": 1957
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1972,
                  "end": 1974
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1978,
                      "end": 1979
                    },
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 1981,
                      "end": 1986
                    }
                  ],
                  "start": 1977,
                  "end": 1987
                },
                "definite": false,
                "start": 1972,
                "end": 1987
              }
            ],
            "declare": false,
            "start": 1966,
            "end": 1988
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 2004,
                              "end": 2005
                            },
                            "start": 2004,
                            "end": 2005
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 2008,
                              "end": 2013
                            },
                            "start": 2008,
                            "end": 2013
                          }
                        ],
                        "start": 2004,
                        "end": 2013
                      },
                      "start": 2003,
                      "end": 2016
                    },
                    "start": 2001,
                    "end": 2016
                  },
                  "start": 1999,
                  "end": 2016
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2020,
                      "end": 2021
                    },
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 2023,
                      "end": 2028
                    }
                  ],
                  "start": 2019,
                  "end": 2029
                },
                "definite": false,
                "start": 1999,
                "end": 2029
              }
            ],
            "declare": false,
            "start": 1993,
            "end": 2030
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2046,
                            "end": 2047
                          },
                          "start": 2046,
                          "end": 2047
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 2049,
                            "end": 2054
                          },
                          "start": 2049,
                          "end": 2054
                        }
                      ],
                      "start": 2045,
                      "end": 2055
                    },
                    "start": 2043,
                    "end": 2055
                  },
                  "start": 2041,
                  "end": 2055
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2059,
                      "end": 2060
                    },
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 2062,
                      "end": 2067
                    }
                  ],
                  "start": 2058,
                  "end": 2068
                },
                "definite": false,
                "start": 2041,
                "end": 2068
              }
            ],
            "declare": false,
            "start": 2035,
            "end": 2069
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2078,
                  "end": 2080
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2084,
                      "end": 2085
                    },
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 2087,
                      "end": 2092
                    }
                  ],
                  "start": 2083,
                  "end": 2093
                },
                "definite": false,
                "start": 2078,
                "end": 2093
              }
            ],
            "declare": false,
            "start": 2074,
            "end": 2094
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 2108,
                              "end": 2109
                            },
                            "start": 2108,
                            "end": 2109
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 2112,
                              "end": 2117
                            },
                            "start": 2112,
                            "end": 2117
                          }
                        ],
                        "start": 2108,
                        "end": 2117
                      },
                      "start": 2107,
                      "end": 2120
                    },
                    "start": 2105,
                    "end": 2120
                  },
                  "start": 2103,
                  "end": 2120
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2124,
                      "end": 2125
                    },
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 2127,
                      "end": 2132
                    }
                  ],
                  "start": 2123,
                  "end": 2133
                },
                "definite": false,
                "start": 2103,
                "end": 2133
              }
            ],
            "declare": false,
            "start": 2099,
            "end": 2134
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2148,
                            "end": 2149
                          },
                          "start": 2148,
                          "end": 2149
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 2151,
                            "end": 2156
                          },
                          "start": 2151,
                          "end": 2156
                        }
                      ],
                      "start": 2147,
                      "end": 2157
                    },
                    "start": 2145,
                    "end": 2157
                  },
                  "start": 2143,
                  "end": 2157
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2161,
                      "end": 2162
                    },
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 2164,
                      "end": 2169
                    }
                  ],
                  "start": 2160,
                  "end": 2170
                },
                "definite": false,
                "start": 2143,
                "end": 2170
              }
            ],
            "declare": false,
            "start": 2139,
            "end": 2171
          }
        ],
        "start": 1960,
        "end": 2173
      },
      "expression": false,
      "start": 1946,
      "end": 2173
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2184,
        "end": 2186
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2203,
                        "end": 2205
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2203,
                          "end": 2205
                        },
                        "right": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 2208,
                          "end": 2212
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2203,
                        "end": 2212
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2203,
                      "end": 2212
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2214,
                        "end": 2216
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2214,
                          "end": 2216
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2219,
                          "end": 2220
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2214,
                        "end": 2220
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2214,
                      "end": 2220
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2222,
                        "end": 2224
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2222,
                          "end": 2224
                        },
                        "right": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 2227,
                          "end": 2232
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2222,
                        "end": 2232
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2222,
                      "end": 2232
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2201,
                  "end": 2234
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2239,
                        "end": 2241
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 2243,
                        "end": 2248
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2239,
                      "end": 2248
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2250,
                        "end": 2252
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2254,
                        "end": 2255
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2250,
                      "end": 2255
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2257,
                        "end": 2259
                      },
                      "value": {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "\"bar\"",
                        "start": 2261,
                        "end": 2266
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2257,
                      "end": 2266
                    }
                  ],
                  "start": 2237,
                  "end": 2268
                },
                "definite": false,
                "start": 2201,
                "end": 2268
              }
            ],
            "declare": false,
            "start": 2195,
            "end": 2269
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2280,
                        "end": 2282
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2280,
                          "end": 2282
                        },
                        "right": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 2285,
                          "end": 2289
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2280,
                        "end": 2289
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2280,
                      "end": 2289
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2291,
                        "end": 2293
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2291,
                          "end": 2293
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2296,
                          "end": 2297
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2291,
                        "end": 2297
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2291,
                      "end": 2297
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2299,
                        "end": 2301
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2299,
                          "end": 2301
                        },
                        "right": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 2304,
                          "end": 2309
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2299,
                        "end": 2309
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2299,
                      "end": 2309
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2278,
                  "end": 2311
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2316,
                        "end": 2318
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 2320,
                        "end": 2325
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2316,
                      "end": 2325
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2327,
                        "end": 2329
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2331,
                        "end": 2332
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2327,
                      "end": 2332
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2334,
                        "end": 2336
                      },
                      "value": {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "\"bar\"",
                        "start": 2338,
                        "end": 2343
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2334,
                      "end": 2343
                    }
                  ],
                  "start": 2314,
                  "end": 2345
                },
                "definite": false,
                "start": 2278,
                "end": 2345
              }
            ],
            "declare": false,
            "start": 2274,
            "end": 2346
          }
        ],
        "start": 2189,
        "end": 2348
      },
      "expression": false,
      "start": 2175,
      "end": 2348
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2359,
        "end": 2362
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2378,
              "end": 2385
            },
            "start": 2371,
            "end": 2386
          }
        ],
        "start": 2365,
        "end": 2388
      },
      "expression": false,
      "start": 2350,
      "end": 2388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2399,
        "end": 2402
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 2418,
                "end": 2422
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2425,
                "end": 2426
              },
              "alternate": {
                "type": "Literal",
                "value": "two",
                "raw": "\"two\"",
                "start": 2429,
                "end": 2434
              },
              "start": 2418,
              "end": 2434
            },
            "start": 2411,
            "end": 2435
          }
        ],
        "start": 2405,
        "end": 2437
      },
      "expression": false,
      "start": 2390,
      "end": 2437
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2448,
        "end": 2451
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 2464,
              "end": 2468
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2487,
                    "end": 2488
                  },
                  "start": 2480,
                  "end": 2489
                }
              ],
              "start": 2470,
              "end": 2495
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "two",
                    "raw": "\"two\"",
                    "start": 2522,
                    "end": 2527
                  },
                  "start": 2515,
                  "end": 2528
                }
              ],
              "start": 2505,
              "end": 2534
            },
            "start": 2460,
            "end": 2534
          }
        ],
        "start": 2454,
        "end": 2536
      },
      "expression": false,
      "start": 2439,
      "end": 2536
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2544,
        "end": 2546
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2553,
              "end": 2556
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2576,
                      "end": 2577
                    },
                    "start": 2569,
                    "end": 2578
                  }
                ],
                "start": 2559,
                "end": 2584
              },
              "expression": false,
              "start": 2556,
              "end": 2584
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2553,
            "end": 2584
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2589,
              "end": 2592
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2612,
                        "end": 2616
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 2619,
                        "end": 2620
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2623,
                        "end": 2624
                      },
                      "start": 2612,
                      "end": 2624
                    },
                    "start": 2605,
                    "end": 2625
                  }
                ],
                "start": 2595,
                "end": 2631
              },
              "expression": false,
              "start": 2592,
              "end": 2631
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2589,
            "end": 2631
          }
        ],
        "start": 2547,
        "end": 2633
      },
      "abstract": false,
      "declare": false,
      "start": 2538,
      "end": 2633
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2644,
        "end": 2647
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2662,
                  "end": 2664
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2673,
                    "end": 2674
                  },
                  "id": null,
                  "generator": false,
                  "start": 2667,
                  "end": 2674
                },
                "definite": false,
                "start": 2662,
                "end": 2674
              }
            ],
            "declare": false,
            "start": 2656,
            "end": 2675
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2686,
                  "end": 2688
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 2697,
                    "end": 2704
                  },
                  "id": null,
                  "generator": false,
                  "start": 2691,
                  "end": 2704
                },
                "definite": false,
                "start": 2686,
                "end": 2704
              }
            ],
            "declare": false,
            "start": 2680,
            "end": 2705
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2716,
                  "end": 2718
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2727,
                    "end": 2731
                  },
                  "id": null,
                  "generator": false,
                  "start": 2721,
                  "end": 2731
                },
                "definite": false,
                "start": 2716,
                "end": 2731
              }
            ],
            "declare": false,
            "start": 2710,
            "end": 2732
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2743,
                  "end": 2745
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2754,
                      "end": 2755
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2756,
                      "end": 2757
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2754,
                    "end": 2757
                  },
                  "id": null,
                  "generator": false,
                  "start": 2748,
                  "end": 2757
                },
                "definite": false,
                "start": 2743,
                "end": 2757
              }
            ],
            "declare": false,
            "start": 2737,
            "end": 2758
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2769,
                  "end": 2771
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 2778,
                        "end": 2783
                      },
                      "start": 2778,
                      "end": 2783
                    },
                    "start": 2776,
                    "end": 2783
                  },
                  "body": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 2787,
                    "end": 2792
                  },
                  "id": null,
                  "generator": false,
                  "start": 2774,
                  "end": 2792
                },
                "definite": false,
                "start": 2769,
                "end": 2792
              }
            ],
            "declare": false,
            "start": 2763,
            "end": 2793
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 2814,
                                "end": 2819
                              },
                              "start": 2814,
                              "end": 2819
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 2822,
                                "end": 2827
                              },
                              "start": 2822,
                              "end": 2827
                            }
                          ],
                          "start": 2814,
                          "end": 2827
                        },
                        "start": 2811,
                        "end": 2827
                      },
                      "start": 2808,
                      "end": 2827
                    },
                    "start": 2806,
                    "end": 2827
                  },
                  "start": 2804,
                  "end": 2827
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 2836,
                    "end": 2841
                  },
                  "id": null,
                  "generator": false,
                  "start": 2830,
                  "end": 2841
                },
                "definite": false,
                "start": 2804,
                "end": 2841
              }
            ],
            "declare": false,
            "start": 2798,
            "end": 2842
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 2864,
                                "end": 2869
                              },
                              "start": 2864,
                              "end": 2869
                            },
                            "start": 2861,
                            "end": 2869
                          },
                          "start": 2858,
                          "end": 2869
                        },
                        {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 2880,
                                "end": 2885
                              },
                              "start": 2880,
                              "end": 2885
                            },
                            "start": 2877,
                            "end": 2885
                          },
                          "start": 2874,
                          "end": 2885
                        }
                      ],
                      "start": 2857,
                      "end": 2886
                    },
                    "start": 2855,
                    "end": 2886
                  },
                  "start": 2853,
                  "end": 2886
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 2895,
                    "end": 2900
                  },
                  "id": null,
                  "generator": false,
                  "start": 2889,
                  "end": 2900
                },
                "definite": false,
                "start": 2853,
                "end": 2900
              }
            ],
            "declare": false,
            "start": 2847,
            "end": 2901
          }
        ],
        "start": 2650,
        "end": 2903
      },
      "expression": false,
      "start": 2635,
      "end": 2903
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2922,
        "end": 2924
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2925,
              "end": 2926
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2925,
            "end": 2926
          }
        ],
        "start": 2924,
        "end": 2927
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2931,
                "end": 2932
              },
              "typeArguments": null,
              "start": 2931,
              "end": 2932
            },
            "start": 2929,
            "end": 2932
          },
          "start": 2928,
          "end": 2932
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2935,
            "end": 2936
          },
          "typeArguments": null,
          "start": 2935,
          "end": 2936
        },
        "start": 2933,
        "end": 2936
      },
      "body": null,
      "expression": false,
      "start": 2905,
      "end": 2937
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2955,
        "end": 2957
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2958,
              "end": 2959
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2958,
            "end": 2959
          }
        ],
        "start": 2957,
        "end": 2960
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2964,
                "end": 2965
              },
              "typeArguments": null,
              "start": 2964,
              "end": 2965
            },
            "start": 2962,
            "end": 2965
          },
          "start": 2961,
          "end": 2965
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2970,
                "end": 2971
              },
              "typeArguments": null,
              "start": 2970,
              "end": 2971
            },
            "start": 2968,
            "end": 2971
          },
          "start": 2967,
          "end": 2971
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2974,
            "end": 2975
          },
          "typeArguments": null,
          "start": 2974,
          "end": 2975
        },
        "start": 2972,
        "end": 2975
      },
      "body": null,
      "expression": false,
      "start": 2938,
      "end": 2976
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2994,
        "end": 2996
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2997,
              "end": 2998
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2997,
            "end": 2998
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3000,
              "end": 3001
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3000,
            "end": 3001
          }
        ],
        "start": 2996,
        "end": 3002
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3006,
                "end": 3007
              },
              "typeArguments": null,
              "start": 3006,
              "end": 3007
            },
            "start": 3004,
            "end": 3007
          },
          "start": 3003,
          "end": 3007
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3012,
                "end": 3013
              },
              "typeArguments": null,
              "start": 3012,
              "end": 3013
            },
            "start": 3010,
            "end": 3013
          },
          "start": 3009,
          "end": 3013
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3016,
                "end": 3017
              },
              "typeArguments": null,
              "start": 3016,
              "end": 3017
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3020,
                "end": 3021
              },
              "typeArguments": null,
              "start": 3020,
              "end": 3021
            }
          ],
          "start": 3016,
          "end": 3021
        },
        "start": 3014,
        "end": 3021
      },
      "body": null,
      "expression": false,
      "start": 2977,
      "end": 3022
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3040,
        "end": 3042
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3043,
              "end": 3044
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3043,
            "end": 3044
          }
        ],
        "start": 3042,
        "end": 3045
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3049,
                "end": 3050
              },
              "typeArguments": null,
              "start": 3049,
              "end": 3050
            },
            "start": 3047,
            "end": 3050
          },
          "start": 3046,
          "end": 3050
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3053,
              "end": 3054
            },
            "typeArguments": null,
            "start": 3053,
            "end": 3054
          },
          "start": 3053,
          "end": 3056
        },
        "start": 3051,
        "end": 3056
      },
      "body": null,
      "expression": false,
      "start": 3023,
      "end": 3057
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3075,
        "end": 3077
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3078,
              "end": 3079
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3088,
              "end": 3094
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3078,
            "end": 3094
          }
        ],
        "start": 3077,
        "end": 3095
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3099,
                "end": 3100
              },
              "typeArguments": null,
              "start": 3099,
              "end": 3100
            },
            "start": 3097,
            "end": 3100
          },
          "start": 3096,
          "end": 3100
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3105,
                "end": 3106
              },
              "typeArguments": null,
              "start": 3105,
              "end": 3106
            },
            "start": 3103,
            "end": 3106
          },
          "start": 3102,
          "end": 3106
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3109,
              "end": 3110
            },
            "typeArguments": null,
            "start": 3109,
            "end": 3110
          },
          "start": 3109,
          "end": 3112
        },
        "start": 3107,
        "end": 3112
      },
      "body": null,
      "expression": false,
      "start": 3058,
      "end": 3113
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g6",
        "optional": false,
        "typeAnnotation": null,
        "start": 3131,
        "end": 3133
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3134,
              "end": 3135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3134,
            "end": 3135
          }
        ],
        "start": 3133,
        "end": 3136
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3140,
                  "end": 3141
                },
                "typeArguments": null,
                "start": 3140,
                "end": 3141
              },
              "start": 3140,
              "end": 3143
            },
            "start": 3138,
            "end": 3143
          },
          "start": 3137,
          "end": 3143
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3146,
            "end": 3147
          },
          "typeArguments": null,
          "start": 3146,
          "end": 3147
        },
        "start": 3144,
        "end": 3147
      },
      "body": null,
      "expression": false,
      "start": 3114,
      "end": 3148
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g7",
        "optional": false,
        "typeAnnotation": null,
        "start": 3166,
        "end": 3168
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3169,
              "end": 3170
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3169,
            "end": 3170
          }
        ],
        "start": 3168,
        "end": 3171
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3175,
                  "end": 3176
                },
                "typeArguments": null,
                "start": 3175,
                "end": 3176
              },
              "start": 3175,
              "end": 3178
            },
            "start": 3173,
            "end": 3178
          },
          "start": 3172,
          "end": 3178
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3181,
              "end": 3182
            },
            "typeArguments": null,
            "start": 3181,
            "end": 3182
          },
          "start": 3181,
          "end": 3184
        },
        "start": 3179,
        "end": 3184
      },
      "body": null,
      "expression": false,
      "start": 3149,
      "end": 3185
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g8",
        "optional": false,
        "typeAnnotation": null,
        "start": 3203,
        "end": 3205
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3206,
              "end": 3207
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3206,
            "end": 3207
          }
        ],
        "start": 3205,
        "end": 3208
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3212,
                "end": 3213
              },
              "typeArguments": null,
              "start": 3212,
              "end": 3213
            },
            "start": 3210,
            "end": 3213
          },
          "start": 3209,
          "end": 3213
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3222,
                        "end": 3223
                      },
                      "typeArguments": null,
                      "start": 3222,
                      "end": 3223
                    },
                    "start": 3220,
                    "end": 3223
                  },
                  "start": 3219,
                  "end": 3223
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3228,
                    "end": 3229
                  },
                  "typeArguments": null,
                  "start": 3228,
                  "end": 3229
                },
                "start": 3225,
                "end": 3229
              },
              "start": 3218,
              "end": 3229
            },
            "start": 3216,
            "end": 3229
          },
          "start": 3215,
          "end": 3229
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3232,
            "end": 3233
          },
          "typeArguments": null,
          "start": 3232,
          "end": 3233
        },
        "start": 3230,
        "end": 3233
      },
      "body": null,
      "expression": false,
      "start": 3186,
      "end": 3234
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3246,
                        "end": 3247
                      },
                      "start": 3246,
                      "end": 3247
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 3250,
                        "end": 3251
                      },
                      "start": 3250,
                      "end": 3251
                    }
                  ],
                  "start": 3246,
                  "end": 3251
                },
                "start": 3245,
                "end": 3254
              },
              "start": 3243,
              "end": 3254
            },
            "start": 3242,
            "end": 3254
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3258,
                "end": 3259
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3261,
                "end": 3262
              }
            ],
            "start": 3257,
            "end": 3263
          },
          "definite": false,
          "start": 3242,
          "end": 3263
        }
      ],
      "declare": false,
      "start": 3236,
      "end": 3264
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3272,
            "end": 3274
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3277,
              "end": 3279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3280,
                "end": 3281
              }
            ],
            "optional": false,
            "start": 3277,
            "end": 3282
          },
          "definite": false,
          "start": 3272,
          "end": 3282
        }
      ],
      "declare": false,
      "start": 3266,
      "end": 3283
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3301,
            "end": 3303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3306,
              "end": 3308
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3309,
                "end": 3310
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3312,
                "end": 3313
              }
            ],
            "optional": false,
            "start": 3306,
            "end": 3314
          },
          "definite": false,
          "start": 3301,
          "end": 3314
        }
      ],
      "declare": false,
      "start": 3295,
      "end": 3315
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3333,
            "end": 3335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3338,
              "end": 3340
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3341,
                "end": 3342
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3344,
                "end": 3345
              }
            ],
            "optional": false,
            "start": 3338,
            "end": 3346
          },
          "definite": false,
          "start": 3333,
          "end": 3346
        }
      ],
      "declare": false,
      "start": 3327,
      "end": 3347
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3369,
            "end": 3371
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3374,
              "end": 3376
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3377,
                "end": 3378
              },
              {
                "type": "Literal",
                "value": "two",
                "raw": "\"two\"",
                "start": 3380,
                "end": 3385
              }
            ],
            "optional": false,
            "start": 3374,
            "end": 3386
          },
          "definite": false,
          "start": 3369,
          "end": 3386
        }
      ],
      "declare": false,
      "start": 3363,
      "end": 3387
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3413,
            "end": 3415
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3418,
              "end": 3420
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3421,
                "end": 3422
              }
            ],
            "optional": false,
            "start": 3418,
            "end": 3423
          },
          "definite": false,
          "start": 3413,
          "end": 3423
        }
      ],
      "declare": false,
      "start": 3407,
      "end": 3424
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3449,
            "end": 3451
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3454,
              "end": 3456
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3457,
                "end": 3458
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3460,
                "end": 3461
              }
            ],
            "optional": false,
            "start": 3454,
            "end": 3462
          },
          "definite": false,
          "start": 3449,
          "end": 3462
        }
      ],
      "declare": false,
      "start": 3443,
      "end": 3463
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3489,
            "end": 3491
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3494,
              "end": 3496
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3498,
                    "end": 3499
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3501,
                    "end": 3502
                  }
                ],
                "start": 3497,
                "end": 3503
              }
            ],
            "optional": false,
            "start": 3494,
            "end": 3504
          },
          "definite": false,
          "start": 3489,
          "end": 3504
        }
      ],
      "declare": false,
      "start": 3483,
      "end": 3505
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3528,
            "end": 3530
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3533,
              "end": 3535
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 3536,
                "end": 3537
              }
            ],
            "optional": false,
            "start": 3533,
            "end": 3538
          },
          "definite": false,
          "start": 3528,
          "end": 3538
        }
      ],
      "declare": false,
      "start": 3522,
      "end": 3539
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x9",
            "optional": false,
            "typeAnnotation": null,
            "start": 3561,
            "end": 3563
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g7",
              "optional": false,
              "typeAnnotation": null,
              "start": 3566,
              "end": 3568
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 3569,
                "end": 3570
              }
            ],
            "optional": false,
            "start": 3566,
            "end": 3571
          },
          "definite": false,
          "start": 3561,
          "end": 3571
        }
      ],
      "declare": false,
      "start": 3555,
      "end": 3572
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x10",
            "optional": false,
            "typeAnnotation": null,
            "start": 3598,
            "end": 3601
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g8",
              "optional": false,
              "typeAnnotation": null,
              "start": 3604,
              "end": 3606
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3607,
                "end": 3608
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3610,
                    "end": 3611
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3615,
                  "end": 3616
                },
                "id": null,
                "generator": false,
                "start": 3610,
                "end": 3616
              }
            ],
            "optional": false,
            "start": 3604,
            "end": 3617
          },
          "definite": false,
          "start": 3598,
          "end": 3617
        }
      ],
      "declare": false,
      "start": 3592,
      "end": 3618
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": null,
            "start": 3641,
            "end": 3644
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g8",
              "optional": false,
              "typeAnnotation": null,
              "start": 3647,
              "end": 3649
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3650,
                "end": 3651
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3653,
                    "end": 3654
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3658,
                    "end": 3659
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3662,
                    "end": 3663
                  },
                  "start": 3658,
                  "end": 3663
                },
                "id": null,
                "generator": false,
                "start": 3653,
                "end": 3663
              }
            ],
            "optional": false,
            "start": 3647,
            "end": 3664
          },
          "definite": false,
          "start": 3641,
          "end": 3664
        }
      ],
      "declare": false,
      "start": 3635,
      "end": 3665
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 3692,
        "end": 3701
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3702,
              "end": 3703
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3702,
            "end": 3703
          }
        ],
        "start": 3701,
        "end": 3704
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3708,
                "end": 3709
              },
              "typeArguments": null,
              "start": 3708,
              "end": 3709
            },
            "start": 3706,
            "end": 3709
          },
          "start": 3705,
          "end": 3709
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3712,
              "end": 3713
            },
            "typeArguments": null,
            "start": 3712,
            "end": 3713
          },
          "start": 3712,
          "end": 3715
        },
        "start": 3710,
        "end": 3715
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3730,
                  "end": 3731
                }
              ],
              "start": 3729,
              "end": 3732
            },
            "start": 3722,
            "end": 3733
          }
        ],
        "start": 3716,
        "end": 3735
      },
      "expression": false,
      "start": 3683,
      "end": 3735
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "append",
        "optional": false,
        "typeAnnotation": null,
        "start": 3746,
        "end": 3752
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3753,
              "end": 3754
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3753,
            "end": 3754
          }
        ],
        "start": 3752,
        "end": 3755
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3759,
                  "end": 3760
                },
                "typeArguments": null,
                "start": 3759,
                "end": 3760
              },
              "start": 3759,
              "end": 3762
            },
            "start": 3757,
            "end": 3762
          },
          "start": 3756,
          "end": 3762
        },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3767,
                "end": 3768
              },
              "typeArguments": null,
              "start": 3767,
              "end": 3768
            },
            "start": 3765,
            "end": 3768
          },
          "start": 3764,
          "end": 3768
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3771,
              "end": 3772
            },
            "typeArguments": null,
            "start": 3771,
            "end": 3772
          },
          "start": 3771,
          "end": 3774
        },
        "start": 3769,
        "end": 3774
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3785,
                  "end": 3791
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3794,
                      "end": 3795
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "slice",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3796,
                      "end": 3801
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3794,
                    "end": 3801
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3794,
                  "end": 3803
                },
                "definite": false,
                "start": 3785,
                "end": 3803
              }
            ],
            "declare": false,
            "start": 3781,
            "end": 3804
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3809,
                  "end": 3815
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3816,
                  "end": 3820
                },
                "optional": false,
                "computed": false,
                "start": 3809,
                "end": 3820
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3821,
                  "end": 3822
                }
              ],
              "optional": false,
              "start": 3809,
              "end": 3823
            },
            "directive": null,
            "start": 3809,
            "end": 3824
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 3836,
              "end": 3842
            },
            "start": 3829,
            "end": 3843
          }
        ],
        "start": 3775,
        "end": 3845
      },
      "expression": false,
      "start": 3737,
      "end": 3845
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bit",
        "optional": false,
        "typeAnnotation": null,
        "start": 3852,
        "end": 3855
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3858,
              "end": 3859
            },
            "start": 3858,
            "end": 3859
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3862,
              "end": 3863
            },
            "start": 3862,
            "end": 3863
          }
        ],
        "start": 3858,
        "end": 3863
      },
      "declare": false,
      "start": 3847,
      "end": 3864
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": null,
            "start": 3870,
            "end": 3872
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 3875,
              "end": 3884
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3885,
                    "end": 3888
                  },
                  "typeArguments": null,
                  "start": 3885,
                  "end": 3888
                }
              ],
              "start": 3884,
              "end": 3889
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3890,
                "end": 3891
              }
            ],
            "optional": false,
            "start": 3875,
            "end": 3892
          },
          "definite": false,
          "start": 3870,
          "end": 3892
        }
      ],
      "declare": false,
      "start": 3866,
      "end": 3893
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "aa",
          "optional": false,
          "typeAnnotation": null,
          "start": 3894,
          "end": 3896
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "append",
            "optional": false,
            "typeAnnotation": null,
            "start": 3899,
            "end": 3905
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "aa",
              "optional": false,
              "typeAnnotation": null,
              "start": 3906,
              "end": 3908
            },
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3910,
              "end": 3911
            }
          ],
          "optional": false,
          "start": 3899,
          "end": 3912
        },
        "start": 3894,
        "end": 3912
      },
      "directive": null,
      "start": 3894,
      "end": 3913
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3913
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 24,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 128,
    "end": 129
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 158,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 210,
    "end": 211
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 242,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 246,
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
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 306,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 324,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 361,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 367,
    "end": 368
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 369,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 384,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 399,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 417,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 435,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 446,
    "end": 447
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 456,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 469,
    "end": 470
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 478,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 500,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 519,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 549,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 560,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 570,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 589,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 598,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 624,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 642,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 669,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 679,
    "end": 680
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 688,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 696,
    "end": 697
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 703,
    "end": 704
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 721,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 740,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 744,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 765,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 788,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 807,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 811,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 815,
    "end": 816
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 816,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 822,
    "end": 823
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 823,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 840,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 848,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 859,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 863,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 867,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 872,
    "end": 873
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 884,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 906,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 915,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 926,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 932,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 937,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 942,
    "end": 943
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 955,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 961,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 966,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 971,
    "end": 972
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 977,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 988,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 994,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1019,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1041,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1046,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1053,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1071,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1077,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1082,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Numeric",
    "value": "456",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1095,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1116,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1122,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1138,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1155,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 1161,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1173,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1181,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1194,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1217,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1224,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1229,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1241,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1254,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1258,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1271,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1275,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1280,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1288,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1292,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1297,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1314,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1331,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1339,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 1343,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1348,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 1360,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1373,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 1377,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 1382,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1389,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1395,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1404,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1416,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1422,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "x3",
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
    "value": "3",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1447,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1452,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 1463,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1468,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 1476,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1481,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 1489,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 1500,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 1515,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1529,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1538,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1550,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1565,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1574,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1599,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1608,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1613,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1624,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1633,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1638,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1646,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1660,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 1668,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1679,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 1688,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1693,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1703,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1725,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1734,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1745,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1767,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1780,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1786,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1806,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1814,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1835,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1848,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1852,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1868,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1881,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1885,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1905,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1913,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1934,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1946,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1955,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1957,
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
    "type": "Keyword",
    "value": "const",
    "start": 1966,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1972,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1981,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1993,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1999,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2008,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2023,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2035,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2041,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2049,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2062,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2074,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2078,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2087,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2099,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2103,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2112,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2127,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2139,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2143,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2151,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2164,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2175,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 2184,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2195,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2203,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2208,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2214,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2222,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2227,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2239,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2243,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2250,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2257,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 2261,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2280,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2285,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2291,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2299,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2304,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2316,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2320,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2327,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2334,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 2338,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2350,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 2359,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2371,
    "end": 2377
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2378,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2390,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2399,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2411,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 2418,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 2429,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2439,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 2448,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2460,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 2464,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2480,
    "end": 2486
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2500,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2515,
    "end": 2521
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 2522,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2538,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2544,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2553,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2569,
    "end": 2575
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2589,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2605,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 2612,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2635,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 2644,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2656,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2662,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2670,
    "end": 2672
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2680,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2686,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 2694,
    "end": 2696
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2697,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2710,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2716,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2724,
    "end": 2726
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2727,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2737,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2743,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2751,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2763,
    "end": 2768
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 2769,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2778,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2784,
    "end": 2786
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2787,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2798,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 2804,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2811,
    "end": 2813
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2814,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 2822,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2833,
    "end": 2835
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 2836,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2847,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 2853,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2858,
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
    "value": "=>",
    "start": 2861,
    "end": 2863
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2864,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2877,
    "end": 2879
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 2880,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2892,
    "end": 2894
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 2895,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2905,
    "end": 2912
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2913,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2922,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2938,
    "end": 2945
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2946,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 2955,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2977,
    "end": 2984
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2985,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 2994,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3023,
    "end": 3030
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3031,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 3040,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3058,
    "end": 3065
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3066,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 3075,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3080,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3088,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3114,
    "end": 3121
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3122,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "g6",
    "start": 3131,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3149,
    "end": 3156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3157,
    "end": 3165
  },
  {
    "type": "Identifier",
    "value": "g7",
    "start": 3166,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3186,
    "end": 3193
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3194,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "g8",
    "start": 3203,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3225,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3236,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3266,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 3272,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 3277,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3295,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 3301,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 3306,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3327,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 3333,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 3338,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3363,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 3369,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 3374,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 3380,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3407,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 3413,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 3418,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3443,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 3449,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 3454,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3483,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 3489,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "g6",
    "start": 3494,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3522,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 3528,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "g6",
    "start": 3533,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3555,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "x9",
    "start": 3561,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "g7",
    "start": 3566,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3592,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 3598,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "g8",
    "start": 3604,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3612,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3635,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 3641,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "g8",
    "start": 3647,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3655,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3683,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "makeArray",
    "start": 3692,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3722,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3730,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3737,
    "end": 3745
  },
  {
    "type": "Identifier",
    "value": "append",
    "start": 3746,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3781,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3785,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 3796,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3809,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 3816,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3829,
    "end": 3835
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3836,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3847,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "Bit",
    "start": 3852,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3866,
    "end": 3869
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 3870,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "makeArray",
    "start": 3875,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "Bit",
    "start": 3885,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 3894,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Identifier",
    "value": "append",
    "start": 3899,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 3906,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3912,
    "end": 3913
  }
]
```
