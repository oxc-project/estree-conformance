__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 21
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__esModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 32
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 32
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 35,
          "end": 39
        },
        "start": 14,
        "end": 39
      },
      "directive": null,
      "start": 14,
      "end": 40
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ios",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 56,
        "end": 58
      },
      "expression": false,
      "start": 41,
      "end": 58
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 66
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "optional": false,
          "computed": false,
          "start": 59,
          "end": 70
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ios",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "start": 59,
        "end": 76
      },
      "directive": null,
      "start": 59,
      "end": 77
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "__esModule",
    "start": 22,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "ios",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "ios",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "ios",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
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
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ios",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 27
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 31,
            "end": 35
          },
          "start": 29,
          "end": 35
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "ios",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 21
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__esModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 32
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 32
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 35,
          "end": 39
        },
        "start": 14,
        "end": 39
      },
      "directive": null,
      "start": 14,
      "end": 40
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 57,
        "end": 59
      },
      "expression": false,
      "start": 41,
      "end": 59
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 72
          },
          "optional": false,
          "computed": false,
          "start": 60,
          "end": 72
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 79
        },
        "start": 60,
        "end": 79
      },
      "directive": null,
      "start": 60,
      "end": 80
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "__esModule",
    "start": 22,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 60,
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
    "value": "base",
    "start": 68,
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
    "value": "base",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
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
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 28
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 32,
            "end": 36
          },
          "start": 30,
          "end": 36
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
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
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "some-library",
        "raw": "\"some-library\"",
        "start": 20,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios2",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 56
          },
          "importKind": "value",
          "start": 45,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "some-library/index",
        "raw": "\"some-library/index\"",
        "start": 64,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 36,
      "end": 85
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 98
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ios3",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 106
          },
          "importKind": "value",
          "start": 95,
          "end": 106
        }
      ],
      "source": {
        "type": "Literal",
        "value": "some-library/index.js",
        "raw": "\"some-library/index.js\"",
        "start": 114,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 86,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "ios",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"some-library\"",
    "start": 20,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "ios",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 49,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "ios2",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 59,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"some-library/index\"",
    "start": 64,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "ios",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 99,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "ios3",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 109,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"some-library/index.js\"",
    "start": 114,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  }
]
```
