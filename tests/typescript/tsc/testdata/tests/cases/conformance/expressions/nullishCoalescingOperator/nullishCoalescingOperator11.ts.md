__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 19,
                      "end": 20
                    },
                    "start": 19,
                    "end": 20
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 23,
                      "end": 24
                    },
                    "start": 23,
                    "end": 24
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 27,
                      "end": 29
                    },
                    "start": 27,
                    "end": 29
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 32,
                    "end": 36
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 39,
                    "end": 48
                  }
                ],
                "start": 19,
                "end": 48
              },
              "start": 17,
              "end": 48
            },
            "start": 14,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 48
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g11",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 58
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "operator": "??",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 79
                },
                "optional": false,
                "computed": false,
                "start": 68,
                "end": 79
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 68,
              "end": 81
            },
            "start": 61,
            "end": 81
          },
          "definite": false,
          "start": 55,
          "end": 81
        }
      ],
      "declare": false,
      "start": 51,
      "end": 81
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 83
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "''",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 30,
    "end": 31
  },
  {
    "type": "Null",
    "value": "null",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "g11",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  }
]
```
