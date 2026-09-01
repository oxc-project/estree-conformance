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
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "xyz",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 78
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xyz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 100
                },
                "optional": false,
                "computed": false,
                "start": 93,
                "end": 100
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 102
              },
              "optional": false,
              "computed": false,
              "start": 93,
              "end": 102
            },
            "start": 86,
            "end": 103
          }
        ],
        "start": 80,
        "end": 105
      },
      "expression": false,
      "start": 64,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 105
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 86,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  }
]
```
