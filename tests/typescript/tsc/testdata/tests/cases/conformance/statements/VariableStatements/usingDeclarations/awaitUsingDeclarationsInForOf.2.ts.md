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
        "name": "main",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "of",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 47
                  },
                  "init": null,
                  "definite": false,
                  "start": 45,
                  "end": 47
                }
              ],
              "declare": false,
              "start": 33,
              "end": 47
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 51,
              "end": 53
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 55,
              "end": 62
            },
            "start": 28,
            "end": 62
          }
        ],
        "start": 22,
        "end": 64
      },
      "expression": false,
      "start": 0,
      "end": 64
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  }
]
```
