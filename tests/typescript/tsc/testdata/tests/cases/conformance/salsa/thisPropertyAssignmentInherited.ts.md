__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Element",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 20
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
                "name": "textContent",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 75
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
                        "value": "",
                        "raw": "''",
                        "start": 92,
                        "end": 94
                      },
                      "start": 84,
                      "end": 94
                    }
                  ],
                  "start": 78,
                  "end": 98
                },
                "expression": false,
                "start": 75,
                "end": 98
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 60,
              "end": 98
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "textContent",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 116
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 118
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 120,
                  "end": 122
                },
                "expression": false,
                "start": 116,
                "end": 122
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 101,
              "end": 122
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "cloneNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 134
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
                        "type": "ThisExpression",
                        "start": 146,
                        "end": 150
                      },
                      "start": 139,
                      "end": 150
                    }
                  ],
                  "start": 137,
                  "end": 151
                },
                "expression": false,
                "start": 134,
                "end": 151
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 125,
              "end": 151
            }
          ],
          "start": 21,
          "end": 153
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 153
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 153
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 178
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Element",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 194
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 195,
          "end": 197
        },
        "abstract": false,
        "declare": false,
        "start": 161,
        "end": 197
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 154,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TextElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 222
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 242
        },
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
                "name": "innerHTML",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 260
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 272,
                          "end": 276
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "textContent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 288
                        },
                        "optional": false,
                        "computed": false,
                        "start": 272,
                        "end": 288
                      },
                      "start": 265,
                      "end": 289
                    }
                  ],
                  "start": 263,
                  "end": 291
                },
                "expression": false,
                "start": 260,
                "end": 291
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 247,
              "end": 291
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "innerHTML",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 307
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "html",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 312
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 316,
                            "end": 320
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "textContent",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 321,
                            "end": 332
                          },
                          "optional": false,
                          "computed": false,
                          "start": 316,
                          "end": 332
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "html",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 339
                        },
                        "start": 316,
                        "end": 339
                      },
                      "directive": null,
                      "start": 316,
                      "end": 340
                    }
                  ],
                  "start": 314,
                  "end": 342
                },
                "expression": false,
                "start": 307,
                "end": 342
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 294,
              "end": 342
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 353
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
                  "start": 356,
                  "end": 361
                },
                "expression": false,
                "start": 353,
                "end": 361
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 345,
              "end": 361
            }
          ],
          "start": 243,
          "end": 363
        },
        "abstract": false,
        "declare": false,
        "start": 205,
        "end": 363
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 363
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 364
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "textContent",
    "start": 64,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 84,
    "end": 90
  },
  {
    "type": "String",
    "value": "''",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 101,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "textContent",
    "start": 105,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "cloneNode",
    "start": 125,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 139,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 154,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 161,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 167,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 179,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "TextElement",
    "start": 211,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 223,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 231,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "innerHTML",
    "start": 251,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 265,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "textContent",
    "start": 277,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 294,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "innerHTML",
    "start": 298,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "html",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "textContent",
    "start": 321,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "html",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  }
]
```
