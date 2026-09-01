__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 0,
                "end": 6
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 7,
                "end": 12
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 6,
                "end": 7
              }
            ],
            "start": 0,
            "end": 12
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "indexOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 20
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 20
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 21,
                "end": 26
              }
            ],
            "expressions": [],
            "start": 21,
            "end": 26
          }
        ],
        "optional": false,
        "start": 0,
        "end": 27
      },
      "directive": null,
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 28
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "`abc${",
    "start": 0,
    "end": 6
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6,
    "end": 7
  },
  {
    "type": "Template",
    "value": "}abc`",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  }
]
```
