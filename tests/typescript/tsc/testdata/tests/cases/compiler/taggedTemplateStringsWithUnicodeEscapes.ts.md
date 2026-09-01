__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
              },
              "start": 20,
              "end": 25
            },
            "start": 18,
            "end": 25
          },
          "value": null,
          "start": 11,
          "end": 25
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 27,
        "end": 30
      },
      "expression": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 33
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "'\\u{1f4a9}'",
                "cooked": "'💩'"
              },
              "tail": false,
              "start": 34,
              "end": 48
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "'\\uD83D\\uDCA9'",
                "cooked": "'💩'"
              },
              "tail": true,
              "start": 76,
              "end": 92
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": " should be converted to ",
              "raw": "\" should be converted to \"",
              "start": 49,
              "end": 75
            }
          ],
          "start": 34,
          "end": 92
        },
        "start": 32,
        "end": 92
      },
      "directive": null,
      "start": 32,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 11,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 23,
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
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 32,
    "end": 33
  },
  {
    "type": "Template",
    "value": "`'\\u{1f4a9}'${",
    "start": 34,
    "end": 48
  },
  {
    "type": "String",
    "value": "\" should be converted to \"",
    "start": 49,
    "end": 75
  },
  {
    "type": "Template",
    "value": "}'\\uD83D\\uDCA9'`",
    "start": 76,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  }
]
```
