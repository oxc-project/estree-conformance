__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
            "start": 16,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 30
          },
          "optional": false,
          "computed": false,
          "start": 16,
          "end": 30
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 55,
                      "end": 62
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 52,
                    "end": 62
                  }
                ],
                "start": 42,
                "end": 68
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 39,
              "end": 68
            }
          ],
          "start": 33,
          "end": 70
        },
        "start": 16,
        "end": 70
      },
      "directive": null,
      "start": 16,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 70
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 21
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "./mod",
                    "raw": "\"./mod\"",
                    "start": 22,
                    "end": 29
                  }
                ],
                "optional": false,
                "start": 14,
                "end": 30
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "optional": false,
              "computed": false,
              "start": 14,
              "end": 32
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "optional": false,
            "computed": false,
            "start": 14,
            "end": 34
          },
          "definite": false,
          "start": 6,
          "end": 34
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 42
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 35,
          "end": 46
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 52
          }
        ],
        "optional": false,
        "start": 35,
        "end": 53
      },
      "directive": null,
      "start": 35,
      "end": 53
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 53
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
    "value": "value",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"./mod\"",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  }
]
```
