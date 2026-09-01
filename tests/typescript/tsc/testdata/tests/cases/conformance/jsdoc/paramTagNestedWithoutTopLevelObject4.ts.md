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
        "start": 46,
        "end": 47
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
          "start": 48,
          "end": 51
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
                  "start": 66,
                  "end": 69
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 73
                },
                "optional": false,
                "computed": false,
                "start": 66,
                "end": 73
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "optional": false,
              "computed": false,
              "start": 66,
              "end": 75
            },
            "start": 59,
            "end": 76
          }
        ],
        "start": 53,
        "end": 78
      },
      "expression": false,
      "start": 37,
      "end": 78
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 78
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 37,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 59,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  }
]
```
