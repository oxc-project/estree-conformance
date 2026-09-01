__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 55,
              "end": 56
            },
            "definite": false,
            "start": 51,
            "end": 56
          }
        ],
        "declare": false,
        "start": 45,
        "end": 57
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 38,
      "end": 57
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 88
          },
          "optional": false,
          "computed": false,
          "start": 74,
          "end": 88
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 96,
                "end": 97
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 93,
              "end": 97
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 100
              },
              "value": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 102,
                "end": 109
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 99,
              "end": 109
            }
          ],
          "start": 91,
          "end": 111
        },
        "start": 74,
        "end": 111
      },
      "directive": null,
      "start": 74,
      "end": 112
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 38,
  "end": 112
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  }
]
```
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 18,
                "end": 23
              }
            ],
            "optional": false,
            "start": 10,
            "end": 24
          },
          "definite": false,
          "start": 6,
          "end": 24
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "optional": false,
            "computed": false,
            "start": 37,
            "end": 40
          },
          "definite": false,
          "start": 32,
          "end": 40
        }
      ],
      "declare": false,
      "start": 26,
      "end": 41
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 50
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "optional": false,
            "computed": false,
            "start": 53,
            "end": 56
          },
          "definite": false,
          "start": 48,
          "end": 56
        }
      ],
      "declare": false,
      "start": 42,
      "end": 57
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 93,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 90,
                "end": 99
              }
            ],
            "start": 88,
            "end": 101
          },
          "definite": false,
          "start": 83,
          "end": 101
        }
      ],
      "declare": false,
      "start": 79,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  }
]
```
