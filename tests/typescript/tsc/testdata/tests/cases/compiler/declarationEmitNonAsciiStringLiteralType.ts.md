__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "IconEmojis",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 23
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alert_low",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 32,
                      "end": 41
                    },
                    "value": {
                      "type": "Literal",
                      "value": "⚠️",
                      "raw": "\"⚠️\"",
                      "start": 43,
                      "end": 47
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 32,
                    "end": 47
                  }
                ],
                "start": 26,
                "end": 50
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 59
                },
                "typeArguments": null,
                "start": 54,
                "end": 59
              },
              "start": 26,
              "end": 59
            },
            "definite": false,
            "start": 13,
            "end": 59
          }
        ],
        "declare": false,
        "start": 7,
        "end": 60
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 60
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
              "name": "singleEmoji",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 86
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "⚠️",
                "raw": "\"⚠️\"",
                "start": 89,
                "end": 93
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 102
                },
                "typeArguments": null,
                "start": 97,
                "end": 102
              },
              "start": 89,
              "end": 102
            },
            "definite": false,
            "start": 75,
            "end": 102
          }
        ],
        "declare": false,
        "start": 69,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 103
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
              "name": "tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 123
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "⚠️",
                    "raw": "\"⚠️\"",
                    "start": 127,
                    "end": 131
                  },
                  {
                    "type": "Literal",
                    "value": "日本語",
                    "raw": "\"日本語\"",
                    "start": 133,
                    "end": 138
                  }
                ],
                "start": 126,
                "end": 139
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 148
                },
                "typeArguments": null,
                "start": 143,
                "end": 148
              },
              "start": 126,
              "end": 148
            },
            "definite": false,
            "start": 118,
            "end": 148
          }
        ],
        "declare": false,
        "start": 112,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 105,
      "end": 149
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "returnsEmoji",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 179
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "⚠️",
              "raw": "\"⚠️\"",
              "start": 183,
              "end": 187
            },
            "start": 183,
            "end": 187
          },
          "start": 181,
          "end": 187
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "⚠️",
                "raw": "\"⚠️\"",
                "start": 201,
                "end": 205
              },
              "start": 194,
              "end": 206
            }
          ],
          "start": 188,
          "end": 208
        },
        "expression": false,
        "start": 158,
        "end": 208
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 151,
      "end": 208
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
              "name": "templateEmoji",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 236
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "⚠️",
                      "cooked": "⚠️"
                    },
                    "tail": true,
                    "start": 239,
                    "end": 243
                  }
                ],
                "expressions": [],
                "start": 239,
                "end": 243
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 252
                },
                "typeArguments": null,
                "start": 247,
                "end": 252
              },
              "start": 239,
              "end": 252
            },
            "definite": false,
            "start": 223,
            "end": 252
          }
        ],
        "declare": false,
        "start": 217,
        "end": 253
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 210,
      "end": 253
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
              "name": "templateObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 279
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 293
                    },
                    "value": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "⚠️",
                            "cooked": "⚠️"
                          },
                          "tail": true,
                          "start": 295,
                          "end": 299
                        }
                      ],
                      "expressions": [],
                      "start": 295,
                      "end": 299
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 288,
                    "end": 299
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 310
                    },
                    "value": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "日本語",
                            "cooked": "日本語"
                          },
                          "tail": true,
                          "start": 312,
                          "end": 317
                        }
                      ],
                      "expressions": [],
                      "start": 312,
                      "end": 317
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 305,
                    "end": 317
                  }
                ],
                "start": 282,
                "end": 320
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 329
                },
                "typeArguments": null,
                "start": 324,
                "end": 329
              },
              "start": 282,
              "end": 329
            },
            "definite": false,
            "start": 268,
            "end": 329
          }
        ],
        "declare": false,
        "start": 262,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 255,
      "end": 330
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
              "name": "speaker",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 352
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "msg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 361,
                      "end": 367
                    },
                    "start": 359,
                    "end": 367
                  },
                  "start": 356,
                  "end": 367
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "🔈",
                            "cooked": "🔈"
                          },
                          "tail": true,
                          "start": 373,
                          "end": 377
                        }
                      ],
                      "expressions": [],
                      "start": 373,
                      "end": 377
                    },
                    {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "🔈 ",
                            "cooked": "🔈 "
                          },
                          "tail": false,
                          "start": 379,
                          "end": 385
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 388,
                          "end": 390
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "msg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 385,
                          "end": 388
                        }
                      ],
                      "start": 379,
                      "end": 390
                    }
                  ],
                  "start": 372,
                  "end": 391
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 400
                  },
                  "typeArguments": null,
                  "start": 395,
                  "end": 400
                },
                "start": 372,
                "end": 400
              },
              "id": null,
              "generator": false,
              "start": 355,
              "end": 400
            },
            "definite": false,
            "start": 345,
            "end": 400
          }
        ],
        "declare": false,
        "start": 339,
        "end": 401
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 332,
      "end": 401
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 401
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "IconEmojis",
    "start": 13,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "alert_low",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"⚠️\"",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 62,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "singleEmoji",
    "start": 75,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"⚠️\"",
    "start": 89,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 94,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "tuple",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"⚠️\"",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"日本語\"",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 140,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 151,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 158,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "returnsEmoji",
    "start": 167,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "String",
    "value": "\"⚠️\"",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 194,
    "end": 200
  },
  {
    "type": "String",
    "value": "\"⚠️\"",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 210,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "templateEmoji",
    "start": 223,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Template",
    "value": "`⚠️`",
    "start": 239,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 244,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 255,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 262,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "templateObj",
    "start": 268,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "alert",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Template",
    "value": "`⚠️`",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Template",
    "value": "`日本語`",
    "start": 312,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 321,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "const",
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
    "value": "export",
    "start": 332,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 339,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "speaker",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "Template",
    "value": "`🔈`",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Template",
    "value": "`🔈 ${",
    "start": 379,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 385,
    "end": 388
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 392,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  }
]
```
