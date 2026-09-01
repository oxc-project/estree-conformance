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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 17,
              "end": 22
            },
            "start": 15,
            "end": 22
          },
          "value": null,
          "start": 11,
          "end": 22
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 24,
        "end": 28
      },
      "expression": false,
      "start": 0,
      "end": 28
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
          "start": 30,
          "end": 31
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n",
                "cooked": "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n"
              },
              "tail": true,
              "start": 32,
              "end": 113
            }
          ],
          "expressions": [],
          "start": 32,
          "end": 113
        },
        "start": 30,
        "end": 113
      },
      "directive": null,
      "start": 30,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
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
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 30,
    "end": 31
  },
  {
    "type": "Template",
    "value": "`0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n`",
    "start": 32,
    "end": 113
  }
]
```
