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
            "name": "a1",
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
                      "value": "literal",
                      "raw": "'literal'",
                      "start": 18,
                      "end": 27
                    },
                    "start": 18,
                    "end": 27
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 30,
                    "end": 39
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 42,
                    "end": 46
                  }
                ],
                "start": 18,
                "end": 46
              },
              "start": 16,
              "end": 46
            },
            "start": 14,
            "end": 46
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 46
        }
      ],
      "declare": true,
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa1",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 56
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 61
            },
            "operator": "??",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 67
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 79
                },
                "optional": false,
                "computed": false,
                "start": 65,
                "end": 79
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 65,
              "end": 81
            },
            "start": 59,
            "end": 81
          },
          "definite": false,
          "start": 53,
          "end": 81
        }
      ],
      "declare": false,
      "start": 47,
      "end": 81
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa2",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 91
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 96
            },
            "operator": "||",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 102
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLocaleUpperCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 120
                },
                "optional": false,
                "computed": false,
                "start": 100,
                "end": 120
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 100,
              "end": 122
            },
            "start": 94,
            "end": 122
          },
          "definite": false,
          "start": 88,
          "end": 122
        }
      ],
      "declare": false,
      "start": 82,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 122
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
    "value": "a1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "'literal'",
    "start": 18,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 30,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41
  },
  {
    "type": "Null",
    "value": "null",
    "start": 42,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "aa1",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 62,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 68,
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
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "aa2",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 97,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "toLocaleUpperCase",
    "start": 103,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  }
]
```
