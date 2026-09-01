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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
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
            "name": "Frag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              },
              "start": 36,
              "end": 41
            },
            "start": 32,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 32,
          "end": 41
        }
      ],
      "declare": true,
      "start": 20,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 44,
          "end": 46
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 46,
          "end": 49
        },
        "start": 44,
        "end": 49
      },
      "directive": null,
      "start": 44,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 51,
          "end": 53
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 54,
                "end": 58
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 53,
              "end": 59
            },
            "children": [
              {
                "type": "JSXText",
                "value": "1",
                "raw": "1",
                "start": 59,
                "end": 60
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 62,
                "end": 66
              },
              "start": 60,
              "end": 67
            },
            "start": 53,
            "end": 67
          },
          {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 67,
              "end": 69
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 70,
                    "end": 74
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 69,
                  "end": 75
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "2.1",
                    "raw": "2.1",
                    "start": 75,
                    "end": 78
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 80,
                    "end": 84
                  },
                  "start": 78,
                  "end": 85
                },
                "start": 69,
                "end": 85
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 86,
                    "end": 90
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 85,
                  "end": 91
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "2.2",
                    "raw": "2.2",
                    "start": 91,
                    "end": 94
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 96,
                    "end": 100
                  },
                  "start": 94,
                  "end": 101
                },
                "start": 85,
                "end": 101
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 101,
              "end": 104
            },
            "start": 67,
            "end": 104
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 104,
          "end": 107
        },
        "start": 51,
        "end": 107
      },
      "directive": null,
      "start": 51,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 108
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 20,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 28,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Frag",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 53,
    "end": 54
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 58,
    "end": 59
  },
  {
    "type": "JSXText",
    "value": "1",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 61,
    "end": 62
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75
  },
  {
    "type": "JSXText",
    "value": "2.1",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 79,
    "end": 80
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "JSXText",
    "value": "2.2",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 95,
    "end": 96
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  }
]
```
