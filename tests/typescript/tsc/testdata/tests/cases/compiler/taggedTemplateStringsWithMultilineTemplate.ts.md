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
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 28,
          "end": 32
        },
        "start": 26,
        "end": 32
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 33,
        "end": 36
      },
      "expression": false,
      "start": 0,
      "end": 36
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
          "start": 38,
          "end": 39
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "\n\\\n\n",
                "cooked": "\n\n"
              },
              "tail": true,
              "start": 40,
              "end": 46
            }
          ],
          "expressions": [],
          "start": 40,
          "end": 46
        },
        "start": 38,
        "end": 46
      },
      "directive": null,
      "start": 38,
      "end": 47
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 47
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
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 38,
    "end": 39
  },
  {
    "type": "Template",
    "value": "`\n\\\n\n`",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  }
]
```
