__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 31
}
```
__ESTREE_TEST__:TOKENS:
```json
[]
```
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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "workflow.yml",
                "raw": "\"workflow.yml\"",
                "start": 1,
                "end": 15
              }
            ],
            "start": 0,
            "end": 16
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 25
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "workflow.yml",
            "raw": "\"workflow.yml\"",
            "start": 26,
            "end": 40
          }
        ],
        "optional": false,
        "start": 0,
        "end": 41
      },
      "directive": null,
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "[",
    "start": 0,
    "end": 1
  },
  {
    "type": "String",
    "value": "\"workflow.yml\"",
    "start": 1,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"workflow.yml\"",
    "start": 26,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  }
]
```
