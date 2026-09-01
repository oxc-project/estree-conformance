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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 36
                  },
                  "init": null,
                  "definite": false,
                  "start": 32,
                  "end": 36
                }
              ],
              "declare": false,
              "start": 26,
              "end": 36
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 41,
                  "end": 44
                },
                {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 46,
                  "end": 49
                },
                {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 51,
                  "end": 54
                }
              ],
              "start": 40,
              "end": 55
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 57,
              "end": 65
            },
            "start": 21,
            "end": 65
          }
        ],
        "start": 15,
        "end": 67
      },
      "expression": false,
      "start": 0,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 67
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
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 32,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 40,
    "end": 41
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  }
]
```
