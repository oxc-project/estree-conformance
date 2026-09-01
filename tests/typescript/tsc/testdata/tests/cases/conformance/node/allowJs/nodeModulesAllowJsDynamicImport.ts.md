__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 45
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
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readFile",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 70
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readFile",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 70
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 62,
                        "end": 70
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 72
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "fs",
                        "raw": "\"fs\"",
                        "start": 88,
                        "end": 92
                      },
                      "options": null,
                      "phase": null,
                      "start": 81,
                      "end": 93
                    },
                    "start": 75,
                    "end": 93
                  },
                  "definite": false,
                  "start": 60,
                  "end": 93
                }
              ],
              "declare": false,
              "start": 54,
              "end": 94
            }
          ],
          "start": 48,
          "end": 96
        },
        "expression": false,
        "start": 26,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 96
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 26,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 32,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
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
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 75,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 45
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
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readFile",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 70
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readFile",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 70
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 62,
                        "end": 70
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 72
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "fs",
                        "raw": "\"fs\"",
                        "start": 88,
                        "end": 92
                      },
                      "options": null,
                      "phase": null,
                      "start": 81,
                      "end": 93
                    },
                    "start": 75,
                    "end": 93
                  },
                  "definite": false,
                  "start": 60,
                  "end": 93
                }
              ],
              "declare": false,
              "start": 54,
              "end": 94
            }
          ],
          "start": 48,
          "end": 96
        },
        "expression": false,
        "start": 26,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 96
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 26,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 32,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
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
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 75,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 20
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
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  }
]
```
