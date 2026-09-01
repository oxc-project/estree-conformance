__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 18,
                    "end": 24
                  },
                  "start": 16,
                  "end": 24
                },
                "start": 15,
                "end": 24
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 14,
            "end": 34
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 43,
              "end": 45
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 39,
            "end": 46
          }
        ],
        "start": 8,
        "end": 48
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 48
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                "typeArguments": null,
                "start": 57,
                "end": 58
              },
              "start": 55,
              "end": 58
            },
            "start": 54,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 58
        }
      ],
      "declare": false,
      "start": 50,
      "end": 59
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "property": {
              "type": "Literal",
              "value": "y",
              "raw": "'y'",
              "start": 71,
              "end": 74
            },
            "optional": false,
            "computed": true,
            "start": 69,
            "end": 75
          },
          "definite": false,
          "start": 64,
          "end": 75
        }
      ],
      "declare": false,
      "start": 60,
      "end": 76
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 84
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "property": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 89,
              "end": 92
            },
            "optional": false,
            "computed": true,
            "start": 87,
            "end": 93
          },
          "definite": false,
          "start": 82,
          "end": 93
        }
      ],
      "declare": false,
      "start": 78,
      "end": 94
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 106,
              "end": 107
            },
            "optional": false,
            "computed": true,
            "start": 104,
            "end": 108
          },
          "definite": false,
          "start": 99,
          "end": 108
        }
      ],
      "declare": false,
      "start": 95,
      "end": 109
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 131,
                "end": 140
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 130,
            "end": 150
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 155,
            "end": 165
          }
        ],
        "start": 124,
        "end": 167
      },
      "declare": false,
      "start": 112,
      "end": 167
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
            "name": "i",
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
                  "start": 176,
                  "end": 177
                },
                "typeArguments": null,
                "start": 176,
                "end": 177
              },
              "start": 174,
              "end": 177
            },
            "start": 173,
            "end": 177
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 177
        }
      ],
      "declare": false,
      "start": 169,
      "end": 177
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 184
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "property": {
              "type": "Literal",
              "value": "y",
              "raw": "'y'",
              "start": 189,
              "end": 192
            },
            "optional": false,
            "computed": true,
            "start": 187,
            "end": 193
          },
          "definite": false,
          "start": 182,
          "end": 193
        }
      ],
      "declare": false,
      "start": 178,
      "end": 194
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 201
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "property": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 206,
              "end": 209
            },
            "optional": false,
            "computed": true,
            "start": 204,
            "end": 210
          },
          "definite": false,
          "start": 199,
          "end": 210
        }
      ],
      "declare": false,
      "start": 195,
      "end": 211
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 218
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 223,
              "end": 224
            },
            "optional": false,
            "computed": true,
            "start": 221,
            "end": 225
          },
          "definite": false,
          "start": 216,
          "end": 225
        }
      ],
      "declare": false,
      "start": 212,
      "end": 226
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 246,
                            "end": 252
                          },
                          "start": 244,
                          "end": 252
                        },
                        "start": 243,
                        "end": 252
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 255,
                        "end": 261
                      },
                      "start": 253,
                      "end": 261
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 242,
                    "end": 262
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 268
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
                      },
                      "start": 268,
                      "end": 276
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 267,
                    "end": 277
                  }
                ],
                "start": 236,
                "end": 279
              },
              "start": 234,
              "end": 279
            },
            "start": 233,
            "end": 279
          },
          "init": null,
          "definite": false,
          "start": 233,
          "end": 279
        }
      ],
      "declare": false,
      "start": 229,
      "end": 279
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 287
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
            },
            "property": {
              "type": "Literal",
              "value": "y",
              "raw": "'y'",
              "start": 292,
              "end": 295
            },
            "optional": false,
            "computed": true,
            "start": 290,
            "end": 296
          },
          "definite": false,
          "start": 285,
          "end": 296
        }
      ],
      "declare": false,
      "start": 281,
      "end": 297
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 304
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "property": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 309,
              "end": 312
            },
            "optional": false,
            "computed": true,
            "start": 307,
            "end": 313
          },
          "definite": false,
          "start": 302,
          "end": 313
        }
      ],
      "declare": false,
      "start": 298,
      "end": 314
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 321
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 326,
              "end": 327
            },
            "optional": false,
            "computed": true,
            "start": 324,
            "end": 328
          },
          "definite": false,
          "start": 319,
          "end": 328
        }
      ],
      "declare": false,
      "start": 315,
      "end": 329
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 344,
                            "end": 350
                          },
                          "start": 342,
                          "end": 350
                        },
                        "start": 341,
                        "end": 350
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 353,
                        "end": 359
                      },
                      "start": 351,
                      "end": 359
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 340,
                    "end": 359
                  }
                ],
                "start": 338,
                "end": 361
              },
              "start": 336,
              "end": 361
            },
            "start": 335,
            "end": 361
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 369,
                  "end": 371
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 366,
                "end": 371
              }
            ],
            "start": 364,
            "end": 373
          },
          "definite": false,
          "start": 335,
          "end": 373
        }
      ],
      "declare": false,
      "start": 331,
      "end": 373
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 382
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "property": {
              "type": "Literal",
              "value": "y",
              "raw": "'y'",
              "start": 387,
              "end": 390
            },
            "optional": false,
            "computed": true,
            "start": 385,
            "end": 391
          },
          "definite": false,
          "start": 379,
          "end": 391
        }
      ],
      "declare": false,
      "start": 375,
      "end": 392
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 400
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 404
            },
            "property": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 405,
              "end": 408
            },
            "optional": false,
            "computed": true,
            "start": 403,
            "end": 409
          },
          "definite": false,
          "start": 397,
          "end": 409
        }
      ],
      "declare": false,
      "start": 393,
      "end": 410
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 418
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 422
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 423,
              "end": 424
            },
            "optional": false,
            "computed": true,
            "start": 421,
            "end": 425
          },
          "definite": false,
          "start": 415,
          "end": 425
        }
      ],
      "declare": false,
      "start": 411,
      "end": 426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 426
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "''",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "r1",
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
    "type": "Identifier",
    "value": "c",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 112,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "r4",
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
    "type": "Identifier",
    "value": "i",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "r5",
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
    "type": "Identifier",
    "value": "i",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "r9",
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
    "type": "Identifier",
    "value": "a",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "String",
    "value": "''",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 393,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 404,
    "end": 405
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  }
]
```
