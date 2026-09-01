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
            "name": "stringContainingUnescapedLineSeparator1",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 169
          },
          "init": {
            "type": "Literal",
            "value": " STRING_CONTENT ",
            "raw": "\" STRING_CONTENT \"",
            "start": 172,
            "end": 190
          },
          "definite": false,
          "start": 130,
          "end": 190
        }
      ],
      "declare": false,
      "start": 126,
      "end": 191
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
            "name": "stringContainingUnescapedParagraphSeparator1",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 240
          },
          "init": {
            "type": "Literal",
            "value": " STRING_CONTENT ",
            "raw": "\" STRING_CONTENT \"",
            "start": 243,
            "end": 261
          },
          "definite": false,
          "start": 196,
          "end": 261
        }
      ],
      "declare": false,
      "start": 192,
      "end": 262
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
            "name": "stringContainingUnescapedLineSeparator2",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 308
          },
          "init": {
            "type": "Literal",
            "value": " STRING_CONTENT ",
            "raw": "' STRING_CONTENT '",
            "start": 311,
            "end": 329
          },
          "definite": false,
          "start": 269,
          "end": 329
        }
      ],
      "declare": false,
      "start": 265,
      "end": 330
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
            "name": "stringContainingUnescapedParagraphSeparator2",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 379
          },
          "init": {
            "type": "Literal",
            "value": " STRING_CONTENT ",
            "raw": "' STRING_CONTENT '",
            "start": 382,
            "end": 400
          },
          "definite": false,
          "start": 335,
          "end": 400
        }
      ],
      "declare": false,
      "start": 331,
      "end": 401
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
            "name": "stringContainingUnescapedLineSeparator3",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 447
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " STRING_CONTENT ",
                  "cooked": " STRING_CONTENT "
                },
                "tail": true,
                "start": 450,
                "end": 468
              }
            ],
            "expressions": [],
            "start": 450,
            "end": 468
          },
          "definite": false,
          "start": 408,
          "end": 468
        }
      ],
      "declare": false,
      "start": 404,
      "end": 469
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
            "name": "stringContainingUnescapedParagraphSeparator3",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 518
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " STRING_CONTENT ",
                  "cooked": " STRING_CONTENT "
                },
                "tail": true,
                "start": 521,
                "end": 539
              }
            ],
            "expressions": [],
            "start": 521,
            "end": 539
          },
          "definite": false,
          "start": 474,
          "end": 539
        }
      ],
      "declare": false,
      "start": 470,
      "end": 540
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 597,
            "end": 600
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "  STRING_CONTENT  ",
                "raw": "\"  STRING_CONTENT  \"",
                "start": 609,
                "end": 629
              },
              {
                "type": "Literal",
                "value": "   STRING_CONTENT   ",
                "raw": "\"   STRING_CONTENT   \"",
                "start": 635,
                "end": 657
              },
              {
                "type": "Literal",
                "value": "STRING_CONTENT ",
                "raw": "\"STRING_CONTENT \"",
                "start": 663,
                "end": 680
              },
              {
                "type": "Literal",
                "value": " STRING_CONTENT",
                "raw": "\" STRING_CONTENT\"",
                "start": 686,
                "end": 703
              },
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\\ ",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 709,
                    "end": 713
                  }
                ],
                "expressions": [],
                "start": 709,
                "end": 713
              },
              {
                "type": "Literal",
                "value": " ",
                "raw": "' '",
                "start": 719,
                "end": 722
              }
            ],
            "start": 603,
            "end": 724
          },
          "definite": false,
          "start": 597,
          "end": 724
        }
      ],
      "declare": false,
      "start": 593,
      "end": 725
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 126,
  "end": 725
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "stringContainingUnescapedLineSeparator1",
    "start": 130,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "String",
    "value": "\" STRING_CONTENT \"",
    "start": 172,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "stringContainingUnescapedParagraphSeparator1",
    "start": 196,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "\" STRING_CONTENT \"",
    "start": 243,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "stringContainingUnescapedLineSeparator2",
    "start": 269,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "String",
    "value": "' STRING_CONTENT '",
    "start": 311,
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
    "value": "var",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "stringContainingUnescapedParagraphSeparator2",
    "start": 335,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "String",
    "value": "' STRING_CONTENT '",
    "start": 382,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "stringContainingUnescapedLineSeparator3",
    "start": 408,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Template",
    "value": "` STRING_CONTENT `",
    "start": 450,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "stringContainingUnescapedParagraphSeparator3",
    "start": 474,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Template",
    "value": "` STRING_CONTENT `",
    "start": 521,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 603,
    "end": 604
  },
  {
    "type": "String",
    "value": "\"  STRING_CONTENT  \"",
    "start": 609,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630
  },
  {
    "type": "String",
    "value": "\"   STRING_CONTENT   \"",
    "start": 635,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "String",
    "value": "\"STRING_CONTENT \"",
    "start": 663,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "String",
    "value": "\" STRING_CONTENT\"",
    "start": 686,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704
  },
  {
    "type": "Template",
    "value": "`\\ `",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 713,
    "end": 714
  },
  {
    "type": "String",
    "value": "' '",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  }
]
```
