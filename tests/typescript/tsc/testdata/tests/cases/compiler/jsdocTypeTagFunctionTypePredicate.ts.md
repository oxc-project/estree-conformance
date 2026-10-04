__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 15
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 23
              },
              "typeArguments": null,
              "start": 18,
              "end": 23
            },
            {
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
                    "name": "code",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 32
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "X",
                        "raw": "\"X\"",
                        "start": 34,
                        "end": 37
                      },
                      "start": 34,
                      "end": 37
                    },
                    "start": 32,
                    "end": 37
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 28,
                  "end": 37
                }
              ],
              "start": 26,
              "end": 39
            }
          ],
          "start": 18,
          "end": 39
        },
        "declare": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 56
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 64
              },
              "typeArguments": null,
              "start": 59,
              "end": 64
            },
            {
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
                    "name": "code",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 73
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Y",
                        "raw": "\"Y\"",
                        "start": 75,
                        "end": 78
                      },
                      "start": 75,
                      "end": 78
                    },
                    "start": 73,
                    "end": 78
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 69,
                  "end": 78
                }
              ],
              "start": 67,
              "end": 80
            }
          ],
          "start": 59,
          "end": 80
        },
        "declare": false,
        "start": 48,
        "end": 81
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 41,
      "end": 81
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "code",
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
    "type": "String",
    "value": "\"X\"",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 48,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 59,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"Y\"",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 111
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
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 146
                    },
                    "start": 128,
                    "end": 146
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "code",
                      "raw": "\"code\"",
                      "start": 150,
                      "end": 156
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 161
                    },
                    "start": 150,
                    "end": 161
                  },
                  "start": 128,
                  "end": 161
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "code",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 171
                    },
                    "optional": false,
                    "computed": false,
                    "start": 165,
                    "end": 171
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "X",
                    "raw": "\"X\"",
                    "start": 176,
                    "end": 179
                  },
                  "start": 165,
                  "end": 179
                },
                "start": 128,
                "end": 179
              },
              "start": 121,
              "end": 180
            }
          ],
          "start": 115,
          "end": 182
        },
        "expression": false,
        "start": 97,
        "end": 182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 182
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ArrowFunctionExpression",
        "expression": false,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 260
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 277
                    },
                    "start": 259,
                    "end": 277
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "code",
                      "raw": "\"code\"",
                      "start": 281,
                      "end": 287
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "start": 281,
                    "end": 292
                  },
                  "start": 259,
                  "end": 292
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 297
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "code",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 296,
                    "end": 302
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "Y",
                    "raw": "\"Y\"",
                    "start": 307,
                    "end": 310
                  },
                  "start": 296,
                  "end": 310
                },
                "start": 259,
                "end": 310
              },
              "start": 252,
              "end": 311
            }
          ],
          "start": 246,
          "end": 313
        },
        "id": null,
        "generator": false,
        "start": 239,
        "end": 313
      },
      "exportKind": "value",
      "start": 184,
      "end": 314
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "isMissing",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 385
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
            "typeAnnotation": null,
            "start": 386,
            "end": 387
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 405
                  },
                  "prefix": true,
                  "start": 403,
                  "end": 405
                },
                "prefix": true,
                "start": 402,
                "end": 405
              },
              "start": 395,
              "end": 406
            }
          ],
          "start": 389,
          "end": 408
        },
        "expression": false,
        "start": 367,
        "end": 408
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 360,
      "end": 408
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertMissing",
          "optional": false,
          "typeAnnotation": null,
          "start": 486,
          "end": 499
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
            "typeAnnotation": null,
            "start": 500,
            "end": 501
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 515
                },
                "prefix": true,
                "start": 513,
                "end": 515
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 537,
                        "end": 546
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 533,
                      "end": 548
                    },
                    "start": 527,
                    "end": 549
                  }
                ],
                "start": 517,
                "end": 555
              },
              "alternate": null,
              "start": 509,
              "end": 555
            }
          ],
          "start": 503,
          "end": 557
        },
        "expression": false,
        "start": 477,
        "end": 557
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 470,
      "end": 557
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 90,
  "end": 558
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 90,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 97,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 130,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 147,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"code\"",
    "start": 150,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 157,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 162,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 172,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"X\"",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 184,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 243,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 252,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 261,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 278,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"code\"",
    "start": 281,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 288,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 293,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 303,
    "end": 306
  },
  {
    "type": "String",
    "value": "\"Y\"",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "export",
    "start": 360,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 367,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "isMissing",
    "start": 376,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 470,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 477,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "assertMissing",
    "start": 486,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 527,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "TypeError",
    "start": 537,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          }
        ],
        "returnType": null,
        "body": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "prefix": true,
            "start": 77,
            "end": 79
          },
          "prefix": true,
          "start": 76,
          "end": 79
        },
        "id": null,
        "generator": false,
        "start": 69,
        "end": 79
      },
      "exportKind": "value",
      "start": 0,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 54
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 83,
            "end": 85
          },
          "definite": false,
          "start": 51,
          "end": 86
        }
      ],
      "declare": false,
      "start": 45,
      "end": 87
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foos",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 262
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 268
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 275
                },
                "optional": false,
                "computed": false,
                "start": 265,
                "end": 275
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 318
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 324
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 341
                    },
                    "start": 323,
                    "end": 341
                  },
                  "id": null,
                  "generator": false,
                  "start": 316,
                  "end": 341
                }
              ],
              "optional": false,
              "start": 265,
              "end": 342
            },
            "definite": false,
            "start": 258,
            "end": 342
          }
        ],
        "declare": false,
        "start": 252,
        "end": 343
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 245,
      "end": 343
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "missings",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 365
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 371
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 378
                },
                "optional": false,
                "computed": false,
                "start": 368,
                "end": 378
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 433
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 441
                      },
                      "prefix": true,
                      "start": 439,
                      "end": 441
                    },
                    "prefix": true,
                    "start": 438,
                    "end": 441
                  },
                  "id": null,
                  "generator": false,
                  "start": 431,
                  "end": 441
                }
              ],
              "optional": false,
              "start": 368,
              "end": 442
            },
            "definite": false,
            "start": 357,
            "end": 442
          }
        ],
        "declare": false,
        "start": 351,
        "end": 443
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 344,
      "end": 443
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 443
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "export",
    "start": 245,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 252,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "foos",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 320,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 325,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 336,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 344,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 351,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "missings",
    "start": 357,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  }
]
```
