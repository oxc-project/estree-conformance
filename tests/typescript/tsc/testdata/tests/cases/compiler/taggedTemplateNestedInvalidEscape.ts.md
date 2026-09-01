__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "template",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 51
              },
              "typeArguments": null,
              "start": 31,
              "end": 51
            },
            "start": 29,
            "end": 51
          },
          "start": 21,
          "end": 51
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "substitutions",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 69
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 71,
                "end": 74
              },
              "start": 71,
              "end": 76
            },
            "start": 69,
            "end": 76
          },
          "value": null,
          "start": 53,
          "end": 76
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 79,
          "end": 85
        },
        "start": 77,
        "end": 85
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 240
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ok ",
                "cooked": "ok "
              },
              "tail": false,
              "start": 240,
              "end": 246
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 253,
              "end": 255
            }
          ],
          "expressions": [
            {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 249
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\\u",
                      "cooked": null
                    },
                    "tail": true,
                    "start": 249,
                    "end": 253
                  }
                ],
                "expressions": [],
                "start": 249,
                "end": 253
              },
              "start": 246,
              "end": 253
            }
          ],
          "start": 240,
          "end": 255
        },
        "start": 237,
        "end": 255
      },
      "directive": null,
      "start": 237,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 345
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "fine ",
                "cooked": "fine "
              },
              "tail": false,
              "start": 345,
              "end": 353
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": " also fine",
                "cooked": " also fine"
              },
              "tail": true,
              "start": 360,
              "end": 372
            }
          ],
          "expressions": [
            {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 356
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\\x",
                      "cooked": null
                    },
                    "tail": true,
                    "start": 356,
                    "end": 360
                  }
                ],
                "expressions": [],
                "start": 356,
                "end": 360
              },
              "start": 353,
              "end": 360
            }
          ],
          "start": 345,
          "end": 372
        },
        "start": 342,
        "end": 372
      },
      "directive": null,
      "start": 342,
      "end": 373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 449
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "\\u",
                "cooked": null
              },
              "tail": true,
              "start": 449,
              "end": 453
            }
          ],
          "expressions": [],
          "start": 449,
          "end": 453
        },
        "start": 446,
        "end": 453
      },
      "directive": null,
      "start": 446,
      "end": 454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null,
          "start": 508,
          "end": 511
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "hello ",
                "cooked": "hello "
              },
              "tail": false,
              "start": 511,
              "end": 520
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": " world",
                "cooked": " world"
              },
              "tail": true,
              "start": 529,
              "end": 537
            }
          ],
          "expressions": [
            {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 523
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\\u{}",
                      "cooked": "\\u{}"
                    },
                    "tail": true,
                    "start": 523,
                    "end": 529
                  }
                ],
                "expressions": [],
                "start": 523,
                "end": 529
              },
              "start": 520,
              "end": 529
            }
          ],
          "start": 511,
          "end": 537
        },
        "start": 508,
        "end": 537
      },
      "directive": null,
      "start": 508,
      "end": 538
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 538
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
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "template",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 31,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "substitutions",
    "start": 56,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 237,
    "end": 240
  },
  {
    "type": "Template",
    "value": "`ok ${",
    "start": 240,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 246,
    "end": 249
  },
  {
    "type": "Template",
    "value": "`\\u`",
    "start": 249,
    "end": 253
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 342,
    "end": 345
  },
  {
    "type": "Template",
    "value": "`fine ${",
    "start": 345,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 353,
    "end": 356
  },
  {
    "type": "Template",
    "value": "`\\x`",
    "start": 356,
    "end": 360
  },
  {
    "type": "Template",
    "value": "} also fine`",
    "start": 360,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 446,
    "end": 449
  },
  {
    "type": "Template",
    "value": "`\\u`",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 508,
    "end": 511
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 511,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 520,
    "end": 523
  },
  {
    "type": "Template",
    "value": "`\\u{}`",
    "start": 523,
    "end": 529
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 529,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  }
]
```
