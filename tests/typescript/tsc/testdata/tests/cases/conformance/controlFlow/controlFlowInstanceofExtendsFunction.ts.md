__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "now",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 53
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 57,
                      "end": 63
                    },
                    "start": 55,
                    "end": 63
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 50,
                  "end": 64
                }
              ],
              "start": 40,
              "end": 70
            },
            "declare": false,
            "start": 21,
            "end": 70
          }
        ],
        "start": 15,
        "end": 72
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 82
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 92
            },
            "optional": false,
            "computed": false,
            "start": 74,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 96
          },
          "optional": false,
          "computed": false,
          "start": 74,
          "end": 96
        },
        "right": {
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
                  "value": "now",
                  "raw": "\"now\"",
                  "start": 124,
                  "end": 129
                },
                "start": 117,
                "end": 129
              }
            ],
            "start": 111,
            "end": 131
          },
          "expression": false,
          "start": 99,
          "end": 131
        },
        "start": 74,
        "end": 131
      },
      "directive": null,
      "start": 74,
      "end": 131
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
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
              "name": "now",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 157
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
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 177,
                      "end": 179
                    },
                    "start": 170,
                    "end": 179
                  }
                ],
                "start": 160,
                "end": 185
              },
              "expression": false,
              "start": 157,
              "end": 185
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 147,
            "end": 185
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "why",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 194
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
                "body": [],
                "start": 197,
                "end": 205
              },
              "expression": false,
              "start": 194,
              "end": 205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 191,
            "end": 205
          }
        ],
        "start": 141,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 133,
      "end": 207
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 216
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 217,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 209,
      "end": 221
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 230
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 234
          },
          "optional": false,
          "computed": false,
          "start": 223,
          "end": 234
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "now",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 240
              },
              "optional": false,
              "computed": false,
              "start": 235,
              "end": 240
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 235,
            "end": 242
          }
        ],
        "optional": false,
        "start": 223,
        "end": 243
      },
      "directive": null,
      "start": 223,
      "end": 243
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 272
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 276
          },
          "optional": false,
          "computed": false,
          "start": 265,
          "end": 276
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "now",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 282
              },
              "optional": false,
              "computed": false,
              "start": 277,
              "end": 282
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 277,
            "end": 284
          }
        ],
        "optional": false,
        "start": 265,
        "end": 285
      },
      "directive": null,
      "start": 265,
      "end": 285
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
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 325
                      },
                      "typeArguments": null,
                      "start": 324,
                      "end": 325
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 328,
                      "end": 334
                    }
                  ],
                  "start": 324,
                  "end": 334
                },
                "start": 322,
                "end": 334
              },
              "start": 321,
              "end": 334
            },
            "init": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 341
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 348
                    },
                    "optional": false,
                    "computed": false,
                    "start": 337,
                    "end": 348
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 337,
                  "end": 350
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 353,
                  "end": 356
                },
                "start": 337,
                "end": 356
              },
              "consequent": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 364
                },
                "typeArguments": null,
                "arguments": [],
                "start": 359,
                "end": 366
              },
              "alternate": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 369,
                "end": 370
              },
              "start": 337,
              "end": 370
            },
            "definite": false,
            "start": 321,
            "end": 370
          }
        ],
        "declare": false,
        "start": 315,
        "end": 370
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 308,
      "end": 370
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 390
        },
        "start": 376,
        "end": 390
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 399
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "why",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 403
                },
                "optional": false,
                "computed": false,
                "start": 398,
                "end": 403
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 398,
              "end": 405
            },
            "directive": null,
            "start": 398,
            "end": 405
          }
        ],
        "start": 392,
        "end": 425
      },
      "alternate": null,
      "start": 372,
      "end": 425
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 425
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 31,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 74,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 117,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"now\"",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 147,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "why",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 209,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 223,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 273,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 308,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 315,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 337,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 378,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "why",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  }
]
```
