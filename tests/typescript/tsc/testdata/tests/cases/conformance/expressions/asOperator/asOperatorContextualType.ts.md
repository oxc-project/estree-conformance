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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
              },
              "id": null,
              "generator": false,
              "start": 25,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    },
                    "start": 38,
                    "end": 46
                  },
                  "start": 37,
                  "end": 46
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 51,
                  "end": 57
                },
                "start": 48,
                "end": 57
              },
              "start": 36,
              "end": 57
            },
            "start": 24,
            "end": 57
          },
          "definite": false,
          "start": 20,
          "end": 57
        }
      ],
      "declare": false,
      "start": 16,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 58
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 16,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 27,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 48,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  }
]
```
